import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

import { useModes } from "./helper/useModes";
import { lightTheme, darkTheme } from "./helper/themes";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Profile from "./components/Profile/Profile";
import Notifications from "./components/Notifications/Notifications";
import About from "./components/About/About";
import CreateRoom from "./components/Room/CreateRoom";
import ChatWindow from "./components/Chat/ChatWindow/ChatWindow";
import PopularRooms from "./components/Room/PopularRooms";
import SearchRooms from "./components/Room/SearchRooms";
import YourRooms from "./components/Room/YourRooms";

// socket context
import { SocketProvider } from "./context/socketContext";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";

import GuardedRoute from "./helper/GuardedRoute";

// hoc
import AppContainer from "./components/hoc/AppContainer";
import AppMain from "./components/hoc/AppMain";
import AppWindow from "./components/hoc/AppWindow";

function App() {
  const [theme, themeToggler] = useModes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const history = useHistory();
  const dispatch = useDispatch();

  const token = localStorage.getItem("userToken");
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(logoutUser());
      history.push("/login");
    } else {
      dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(getUserData());
    }
  }

  const authenticated = useSelector((state) => state.user.authenticated);

  return (
    <ThemeProvider theme={themeMode}>
      <SocketProvider>
        <StyledApp>
          <Switch>
            <Route path="/" exact>
              {authenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>

            <Route path="/login">
              {authenticated ? <Redirect to="/home" /> : <Login />}
            </Route>

            <Route path="/signup">
              {authenticated ? <Redirect to="/home" /> : <Signup />}
            </Route>

            <AppContainer>
              <AppMain>
                <AppWindow>
                  <GuardedRoute
                    path="/create-room"
                    authenticated={authenticated}
                    exact
                    component={CreateRoom}
                  />
                  <GuardedRoute
                    path="/room/:id"
                    authenticated={authenticated}
                    exact
                    component={ChatWindow}
                  />
                  <GuardedRoute
                    path="/rooms/popular"
                    authenticated={authenticated}
                    exact
                    component={PopularRooms}
                  />
                  <GuardedRoute
                    path="/rooms/search"
                    exact
                    authenticated={authenticated}
                    component={SearchRooms}
                  />
                  <GuardedRoute
                    path="/rooms/yours"
                    exact
                    authenticated={authenticated}
                    component={YourRooms}
                  />
                  <GuardedRoute
                    path="/profile"
                    authenticated={authenticated}
                    exact
                    component={Profile}
                  />
                  <GuardedRoute
                    path="/favorites"
                    authenticated={authenticated}
                    exact
                    component={Favorites}
                  />
                  <GuardedRoute
                    path="/home"
                    authenticated={authenticated}
                    exact
                    component={Home}
                  />
                  <GuardedRoute
                    path="/about"
                    authenticated={authenticated}
                    exact
                    component={About}
                  />
                  <GuardedRoute
                    path="/notifications"
                    authenticated={authenticated}
                    exact
                    component={Notifications}
                  />
                </AppWindow>
              </AppMain>
            </AppContainer>

            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </StyledApp>
      </SocketProvider>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  width: 100%;
  height: 100%;
`;

export default App;

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
import Settings from "./components/Settings/Settings";
import ToolBar from "./components/ToolBar/ToolBar";
import Header from "./components/Header/Header";
import CreateRoom from "./components/Room/CreateRoom";
import ChatWindow from "./components/Chat/ChatWindow/ChatWindow";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";

import GuardedRoute from "./helper/GuardedRoute";

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
      <StyledApp>
        <Switch>
          <Route path="/" exact>
            {authenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {authenticated ? <Redirect to="/home" /> : <Login />}
          </Route>

          <Route path="/signup">
            {authenticated ? <Redirect to="/home" /> : <Signup />}
          </Route>

          <StyledContainer>
            <StyledMain>
              <ToolBar />

              <StyledWindow>
                <Header />
                <GuardedRoute
                  path="/create-room"
                  exact
                  component={CreateRoom}
                />
                <GuardedRoute path="/room/:id" exact component={ChatWindow} />
                <GuardedRoute path="/profile" exact component={Profile} />
                <GuardedRoute path="/favorites" exact component={Favorites} />
                <GuardedRoute path="/home" exact component={Home} />
                <GuardedRoute path="/settings" exact component={Settings} />
                <GuardedRoute path="/about" exact component={About} />
                <GuardedRoute
                  path="/notifications"
                  exact
                  component={Notifications}
                />
              </StyledWindow>
            </StyledMain>
          </StyledContainer>

          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #171726;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMain = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 96%;
  margin: auto;
  background: #202136;
  display: flex;
  align-items: center;

  border: 1px solid #373759;
  border-radius: 24px;
`;

const StyledWindow = styled.div`
  display: flex;
  flex-direction: column;

  height: 96%;
  width: 100%;
  padding: 0em 1.5em;
`;

export default App;

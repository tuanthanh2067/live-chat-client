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
  console.log(authenticated);

  return (
    <ThemeProvider theme={themeMode}>
      <StyledApp>
        <Switch>
          <Route path="/login">
            {authenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/signup">
            {authenticated ? <Redirect to="/" /> : <Signup />}
          </Route>
          <GuardedRoute path="/" exact component={Home} />
          <GuardedRoute path="/favorites" exact component={Favorites} />
          <GuardedRoute path="/profile" exact component={Profile} />
          <GuardedRoute path="/notifications" exact component={Notifications} />
          <GuardedRoute path="/about" exact component={About} />
          <GuardedRoute path="/settings" exact component={Settings} />
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

export default App;

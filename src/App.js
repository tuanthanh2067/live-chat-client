import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

import { useModes } from "./helper/useModes";
import { lightTheme, darkTheme } from "./helper/themes";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  const [theme, themeToggler] = useModes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <StyledApp>
        <Switch>
          <Route path="/login" render={() => <Login />}></Route>
          <Route path="/signup" render={() => <Signup />}></Route>
          <Route path="/" exact render={() => <Login />}></Route>
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

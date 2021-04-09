import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { useModes } from "./helper/useModes";
import { lightTheme, darkTheme } from "./helper/themes";

function App() {
  const [theme, themeToggler] = useModes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <StyledApp></StyledApp>;
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export default App;

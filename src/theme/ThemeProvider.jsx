import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./light";

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import {
  LayoutDiv
} from "./Root.styled";
import { darkTheme, lightTheme } from "../utils/ThemeStyles";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";

const Root = () => {
  const [theme, setTheme] = useState<string>("dark");
  const isDarkTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={isDarkTheme}>
      <GlobalStyles />
      <LayoutDiv>
        <Outlet />
      </LayoutDiv>
    </ThemeProvider>
  );
};

export default Root;

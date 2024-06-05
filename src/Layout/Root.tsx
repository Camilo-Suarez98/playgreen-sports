import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {
  LayoutDiv
} from "./Root.styled";
import { darkTheme, lightTheme } from "../utils/ThemeStyles";
import { useState } from "react";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";
import MenuBar from "../components/MenuBar/MenuBar";

const Root = () => {
  const [theme, setTheme] = useState<string>("dark");
  const isDarkTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={isDarkTheme}>
      <GlobalStyles />
      <LayoutDiv>
        <MenuBar />
        <Outlet />
      </LayoutDiv>
    </ThemeProvider>
  );
};

export default Root;

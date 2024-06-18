import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {
  LayoutDiv
} from "./Root.styled";
import { darkTheme, lightTheme } from "../utils/ThemeStyles";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";
import { useTheme } from "../context/ThemeContext";

const Root = () => {
  const { theme } = useTheme();
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

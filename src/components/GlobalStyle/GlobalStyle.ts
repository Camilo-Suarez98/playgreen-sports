import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    font-family: Arial, sans-serif;
    margin: 0;
    height: 100%;
    width: 100%;
  };
`;
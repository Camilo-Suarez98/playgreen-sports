import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    height: 100%;
  };
`;
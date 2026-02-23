import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    background-color: #f9fafb;
    color: #374151;
    line-height: 1.6;
    font-size: 1.6rem;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  button {
    font-family: inherit;
  }

`;

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Black';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    :root {
        --color-gray100: #f8f8f8;

        --color-orange500: #FF5600;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Karla", sans-serif;
        margin: 0;
    }

    main {
        padding: 36px;
    }
`

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";
import HankenGroteskTTF from "../assets/fonts/HankenGrotesk-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${(props) => props.theme.fontFamily};
        font-style: normal;
        font-weight: normal;
        src: url(${HankenGroteskTTF}) format('truetype');
    }

    body {
        font-family: ${(props) => props.theme.fontFamily};
        margin: 0;
        padding: 0;
    }

    .attribution {
        font-size: 11px;
        text-align: center;
    }

    .attribution a {
        color: hsl(228, 45%, 44%);
    }
`;

export default GlobalStyle;

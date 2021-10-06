import { createGlobalStyle } from "styled-components";
import Fjalla from "../assets/fonts/FjallaOne-Regular.ttf";
import FrankRuh from "../assets/fonts/FrankRuhlLibre-Regular.ttf";
import FrankRuhBold from "../assets/fonts/FrankRuhlLibre-Bold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'FrankRuh';
    src: url(${FrankRuh}) format('truetype');
}

@font-face {
    font-family: 'FrankRuhBold';
    src: url(${FrankRuhBold}) format('truetype');
}

@font-face {
    font-family: 'Fjalla';
    src: url(${Fjalla}) format('truetype');
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'FrankRuh';
    color: rgb(19,24,44);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;

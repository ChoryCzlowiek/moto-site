import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/RobotoCondensed-Regular.ttf";
import RobotoBold from "../assets/fonts/RobotoCondensed-Bold.ttf";
import Tangerine from "../assets/fonts/Tangerine-Bold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
}

@font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold}) format('truetype');
}

@font-face {
    font-family: 'Tangerine';
    src: url(${Tangerine}) format('truetype');
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto';
    color: rgb(19,24,44);
    background-color: rgb(19,24,44);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;

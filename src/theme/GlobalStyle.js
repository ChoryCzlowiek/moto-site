import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/RobotoCondensed-Regular.ttf";
import RobotoBold from "../assets/fonts/RobotoCondensed-Bold.ttf";
import Lato from "../assets/fonts/Lato-Bold.ttf";

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
    font-family: 'Lato';
    src: url(${Lato}) format('truetype');
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto';
    color: rgb(19,24,44);
    background-color: rgb(255,255,255);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.burger-menu,
.burger-menu.open {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 9999;
  background: rgb(19, 24, 44);
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.burger-menu .bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  background-color: rgb(226, 65, 21);
  margin: 4px 0;
  transition: 0.4s;
}

.burger-menu.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
}

.burger-menu.open .bar2 {
  opacity: 0;
}

.burger-menu.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -6px);
  transform: rotate(45deg) translate(-6px, -6px);
}

/* Menu */

.menu {
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;
}
.menu ul {
  position: relative;
  top: 0px;
  font-size: 24px;
  padding: 0px;
}
.menu li {
  list-style: outside none none;
  margin: 10px 0px;
  padding: 0;
  cursor: pointer;
}
.menu li:hover {
  color: #ff0000;
}

.popup-overlay {
  margin-top: 64px;
}

`;

export default GlobalStyle;

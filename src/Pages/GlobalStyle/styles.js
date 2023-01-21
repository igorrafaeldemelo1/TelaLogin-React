import { createGlobalStyle } from 'styled-components';
import {primaryColor, secundaryColor, backColor, errorColor} from '../GlobalStyle/Colors'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body{
    font-family: sans-serif;
    background-position: center;
    background-size: cover;
}

html, border-style, #root{
height: 100%;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
.flex{
    display: flex;
}
`;

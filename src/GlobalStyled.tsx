import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --Pink: hsl(322, 100%, 66%);
        --VeryPaleCyan: hsl(193, 100%, 96%);
        --VeryDarkCyan: hsl(192, 100%, 9%);
        --GrayishBlue: hsl(208, 11%, 55%);
    }
    *{
        padding: 0; margin: 0; border: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        overflow-x: hidden;
    }


`;
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, button, input, body, * {
        font-family: "Roboto Slab", serif;
    }

    body {
       background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
    }
    
`
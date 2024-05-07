import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 116px auto;

    grid-template-areas:
    "header"
    "content"
    ;
`

export const Content = styled.div`
    grid-area: 'content';
    padding: 50px 123px;

    > main {
        margin-top: 40px;
        height: 490px;
        overflow-y: auto; 
        
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    ::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
        width: 10px;   
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 8px;
    }
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        width: 200px;
        height: 56px;

        border: none;
        border-radius: 8px;

        font-weight: bold;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.BLACK_PLUS}; 
        background-color: ${({ theme }) => theme.COLORS.RED}; 
    }
`

// Settings Movie Notes 

export const MovieNote = styled(Link)`
    text-decoration: none;
    
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 32px;
    
    border-radius: 16px;


    background-color: ${({ theme }) => theme.COLORS.RED_TRANSPARENT};

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY};
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Foot = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`
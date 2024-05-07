import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: max-content auto;
    
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        overflow-y: auto;
        padding-bottom: 50px;
    }

`

export const Content = styled.div`
    grid-area: content;
    margin: auto;
    width: 70%;

    a {
        text-decoration: none;
        span:nth-child(1) {
            margin-top: 40px;
            margin-bottom: 24px;
        }
    }

    > h1 {
        margin-bottom: 40px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
   

    gap: 40px;

    > .two-inputs {
        display: flex;
        gap: 40px;
    }

    > section {
        display: flex;
        flex-direction: column;
        gap: 24px;

        > h2 {
            color: ${({ theme }) => theme.COLORS.GRAY};
        }

        > .markers {
            display: flex;
            gap: 24px;
            padding: 16px;
            border-radius: 8px;

            background-color: ${({ theme }) => theme.COLORS.BLACK_BLACK};
        }
    }
    
    > .two-buttons {
        display: flex;
        gap: 40px;

        > button:nth-child(1) {
            width: 100%;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;

            background-color: ${({ theme }) => theme.COLORS.BLACK_BLACK};

            color: ${({ theme }) => theme.COLORS.RED};
        }
    }
`
import styled from "styled-components"
import backgroundImg from '../../assets/cine.png'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 600px auto;
    grid-template-areas: 
    "form background"
    ;
`

export const Form = styled.div`
    grid-area: 'form';
    display: grid;
    place-content: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.RED};
        font-size:  48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size:  14px;
        margin-bottom: 48px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size:  24px;
        margin-bottom: 48px;
    }

    > div:nth-child(4) {
        margin-bottom: 8px;
    }

    > div:nth-child(5) {
        margin-bottom: 24px;
    }

    > button {
        margin-bottom: 42px;
    }

    a {
        text-decoration: none;
        span {
            text-align: center;
        }
    } 
`

export const Background = styled.div`
    grid-area: 'background';
    background: url(${backgroundImg});
    background-size: cover;
    flex: 1;
`
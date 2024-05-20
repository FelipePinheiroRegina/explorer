import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 150px auto;
    
`

export const StyleRow  = styled.div`
    background-color: ${({ theme }) => theme.COLORS.RED_TRANSPARENT};
    display: flex;

    align-items: center;
    
    a {
        text-decoration: none;
        span {
            margin-left: 80px; 
        }
    }
    
`
export const Form  = styled.div`
    width: 400px;
    margin: auto;

    text-align: center; 

    display: grid;
    gap: 8px;

    > div:nth-child(3) {
        margin-bottom: 24px;
    }

    > div:nth-child(5) {
        margin-bottom: 24px;
    }
    
`
export const Avatar = styled.div`
    position: relative;
    margin-top: -110px;
    margin-bottom: 64px;

    > img {
        border-radius: 50%;    
        width: 186px;
        height: 186px;
    }

    > label {
        position: absolute;
        right: 110px;
        top: 135px;

        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.RED};
        padding: 10px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        place-content: center;

        svg {
            font-size: 20px;
        }
    }

    > input {
        display: none;
    }
`
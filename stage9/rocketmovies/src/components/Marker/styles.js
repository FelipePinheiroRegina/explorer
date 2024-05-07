import styled from "styled-components"

export const Container = styled.span`
    display: inline-flex;
    border-radius: 10px;
    padding: 16px;

    border: ${({ theme, $isNew }) => $isNew? `1px dashed ${theme.COLORS.GRAY}` : theme.COLORS.BACKGROUND_INPUT};

    background-color: ${({ theme, $isNew }) => $isNew? 'TRANSPARENT' : theme.COLORS.BACKGROUND_INPUT};
    

    input {
        outline: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: transparent;

        width: ${({ theme, $isNew }) => $isNew? '130px' : '80px'};

        font-size: 18px;

        &::placeholder {
            font-size: 18px;
        }
    }

    button {
        cursor: pointer;
        border: none;
        background-color: TRANSPARENT;
        color: ${({ theme }) => theme.COLORS.RED};

        svg {
            font-size: 24px;
        }
    } 
`


   

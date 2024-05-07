import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    border-radius: 10px;
    height: 56px;
    flex: 1;
    > input {
        width: 100%;
        
        padding-left: 16px;
        border: none;
        outline: none;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    > svg {
        margin-left: 16px;
    }

    
`
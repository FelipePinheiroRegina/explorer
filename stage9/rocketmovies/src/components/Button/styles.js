import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.BLACK_BUTTON};
`
import styled from "styled-components"

export const Container = styled.span`
    display: flex;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.COLORS.RED};
`
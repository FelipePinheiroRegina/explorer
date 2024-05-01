import styled from "styled-components"

export const Container = styled.span`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.RED};
`
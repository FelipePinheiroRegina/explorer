import styled from "styled-components"

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;

    padding: 5px 15px;
    border-radius: 8px;

    font-size: 12px;
`
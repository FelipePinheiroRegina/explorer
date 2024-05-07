import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    border: none;
    resize: none;
    height: 280px;
    border-radius: 10px;
    outline: none;

    color: ${({ theme }) => theme.COLORS.GRAY};
    padding: 19px 16px;
`
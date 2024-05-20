import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    gap: 64px;

    padding: 0 123px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

    height: 116px;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.RED};
    }
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    > div {
        display: flex;
        flex-direction: column;

        strong {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
        }

        button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY};
            text-decoration: none;
            text-align: right;
        }
    }

    img {
        border-radius: 50%;
        height: 64px;
        width: 64px;
        cursor: pointer;
    }
`
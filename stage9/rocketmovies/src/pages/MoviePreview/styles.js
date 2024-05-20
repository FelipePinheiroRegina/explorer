import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: max-content auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 50px 0px;
    }
`

export const Content = styled.div`
    width: 70%;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    a {
        text-decoration: none;

        span:nth-child(1) {
            margin-bottom: 24px;
        }
    } 

    > .details{
        display: flex;
        flex-direction: column;
        gap: 24px;

        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;

            h1 {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-weight: 600;
                font-size: 36px;
            }
        } 
        
        .nameAndDate {
            color: ${({ theme }) => theme.COLORS.WHITE};

            display: flex;
            align-items: center;
            gap: 8px;

            .name {
                display: flex;
                align-items: center;
                gap: 8px;

                img {
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                }
            }

            .date {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: ${({ theme }) => theme.COLORS.RED};
                }
            }
        }
    }

    > .tags {
        display: flex;
        gap: 8px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        line-height: 24px;
    }
`
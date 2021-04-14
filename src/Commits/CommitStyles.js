import styled from 'styled-components';
import { down } from 'styled-breakpoints'

export const CommitStyles = styled.div`
    margin: auto;

    .containerBody {
        width: 90%;
        margin: auto;
    }
    
    nav {
        padding: 36px 0;

        > div {
            flex: 1;
        }

        form {
            margin-right: 0;
        }

        ${down('md')} {
            display: flex;
            flex-direction: column;
            padding: 24px 0 16px;
        }

    }

    h3 {
        text-align: center;
        font-size: 36px;
        color: #29335C;
        font-weight: 600;
        letter-spacing: -1.5px;
    }

    ul {
        padding: 0;
        list-style: none;
        color: #18214D;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                margin: 0 auto;
                font-size: 20px;
                letter-spacing: -0.4px;
            }

            > div {
                display: grid;
                grid-template-columns: 2fr 7fr;
                grid-gap: 16px;
                margin-bottom: 32px;
                margin-right: 64px;
                align-items: center;
                flex: 8;
            }

            figure {
                text-align: center;
                img {
                    border-radius: 50%;
                    height: 60px;
                    width: 60px;
                    margin-bottom: 4px;
                }

                figcaption {
                    font-size: 22px;
                    font-weight: 600;
                    letter-spacing: -0.55px;
                    word-break: break-word;
                }
            }

            p, time {
                font-size: 20px;
                letter-spacing: -0.4px;

                ${down('md')} {
                    word-break: break-word;
                }
            }
        }
    }
`
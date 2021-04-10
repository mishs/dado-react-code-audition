import styled from 'styled-components';

export const CommitStyles = styled.div`
    nav {
        padding: 36px 0;

        > div {
            flex: 1;
        }

        form {
            margin-right: 0;
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
                display: flex;
                align-items: center;
            }

            figure {
                img {
                    border-radius: 50%;
                    height: 60px;
                    width: 60px;
                }

                figcaption {
                    font-size: 22px;
                    font-weight: 600;
                    letter-spacing: -0.55px;
                }
            }

            p {
                font-size: 20px;
                letter-spacing: -0.4px;
            }
        }
    }
`
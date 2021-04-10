import styled from 'styled-components';

export const HeaderStyles = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        padding: 48px 0 64px;
        align-items: center;
    }

    h1, ul {
        margin: 0;
    }

    h1 {
        a {
            text-decoration: none;
            font-siex: 28px;
            font-weight: 700;
            color: #18214D;
            letter-spacing: -0.6px;
        }
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;

        li {
            margin-left: 64px;

            &:first-child {
                margin-left: 0;
            }

            a {
                text-decoration: none;
                font-size: 20px;
                color: #000;
            }
        }
    }     
`
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const HeaderStyles = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        padding: 48px 0 64px;
        align-items: center;

        ${down('xs')} {
            flex-direction: column;
            padding: 24px 0 16px;
        }
    }

    h1, ul {
        margin: 0;
    }

    h1 {
        a {
            text-decoration: none;
            font-size: 28px;
            font-weight: 700;
            color: #18214D;
            letter-spacing: -0.6px;
        }

        ${down('xs')} {
            margin-bottom: 16px;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;

        li {
            margin-left: 64px;

            ${down('xs')} {
                margin-left: 32px;
            }

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
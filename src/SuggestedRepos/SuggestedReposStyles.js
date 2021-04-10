import styled from "styled-components";

export const SuggestedReposStyles = styled.div`
    margin: 24px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        margin-top: 24px;

        li {
            margin-right: 16px;
            background: #29335C;
            color: #fff;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: -0.4px;
            cursor: pointer;
        }
    }

    span {
        text-align: center;
        font-size: 14px;
        color: #3E4462;
        letter-spacing: -0.4px;
    }
`
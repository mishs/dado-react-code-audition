import styled from "styled-components";

export const SearchInputStyles = styled.div`
    form {
        display: flex;
        justify-content: center;
        max-width: 920px;
        margin: 0 auto;

        .search-wrapper {            
            display: flex;
            align-items: center;
            background-color: #DFE4EA;
            flex: 1;
            margin-right: 16px;
            border-radius: 8px;
            
            svg {
                padding: 16px;
                fill: #29335C;
            }

            input {
                border: none;
                background: transparent;
                font-size: 20px;
                letter-spacing: -0.5px;
                width: 100%;
                height: 100%;

                &::placeholder {
                    color: #B1B5C5;
                }

                &:focus {
                    outline-color: #98a1ab;         
                }
            }
        }

        input[type="submit"] {
            background-color: #F3663F;
            color: #fff;
            border: none;
            font-size: 20px;
            letter-spacing: -0.5px;
            font-weight: 600;
            border-radius: 8px;
            height: 58px;
            cursor: pointer;
            padding: 15px 30px;
        }
    }
`
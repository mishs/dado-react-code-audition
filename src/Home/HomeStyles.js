import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const HomeStyles = styled.div`
    .hero {
        text-align: center;
        max-width: 540px;
        margin: 0 auto 64px;

        h2 {                  
            font-size: 72px;
            color: #18214D;
            font-weight: 600;
            line-height: 80px;
            letter-spacing: -3px;
            margin-bottom: 16px;

            ${down('xs')} {
                margin-top: 32px;
                font-size: 56px;
                line-height: 62px;
            }
        }

        p {
            font-size: 20px;
            line-height: 28px;
            color: #3E4462;
            letter-spacing: -0.4px;
            max-width: 445px;
            margin: 0 auto; 
        }
    }

`
import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const FooterWrapper = styled.div`
    text-align:center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    .icon{
        height: 15px;
        padding: 50px 10px 10px 10px;
    }
    @media ${breakpoints.sm} {
        p{
            font-size: 12px;
        }
        .icon{
            padding-top: 10px;
        }
    }
    /* button{
        border: none;
        background-color: transparent;
    } */
`;
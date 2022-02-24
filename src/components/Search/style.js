import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    img{
        width: 20px;
        cursor: pointer;
    }
    input{
        border: none;
        border-bottom: 1px solid black;
        background-color: transparent;
        margin: 0 10px;
        @media ${breakpoints.sm} {
            margin: 0px;
            margin-left: 10px;
        }
        &:focus{
            outline: none;
        }
        font-family: 'Poppins', sans-serif;

    }
    .closeIcon{
        @media ${breakpoints.sm} {
            display: none;
        }
    }
    @media ${breakpoints.sm}  {
        padding-bottom: 5px;
    }
`;
import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 20px;
        cursor: pointer;
    }
    input{
        border: none;
        border-bottom: 1px solid black;
        background-color: transparent;
        margin: 0 10px;
        &:focus{
            outline: none;
        }
        font-family: 'Poppins', sans-serif;

    }
`;
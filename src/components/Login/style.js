import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const Button = styled.button`
        background-color: transparent;
        height: 36px;
        padding: 0px 24px;
        margin-left: 24px;
        border: 1px solid black;
        font-size: 16px;
        @media ${breakpoints.sm} {
                height: 36px;
                padding: 0px 10px;
                margin-left: 10px;
                font-size: 12px;
        }
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        &:hover {
                background-color: #F8F8F8;

        }
`;

export const FormLogin = styled.div`
        display: block;
        top: 50%;
        left: 50%;
`;

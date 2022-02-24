import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    & > div {
    width: 85%;
    }
    
`;

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    @media ${breakpoints.xs} {
        grid-template-columns:1fr;     
    }
    background-color: #f7f7f7;
    .aboutImage{
        width: 100%;
        height: 100%;
    }
    .textWrapper{
        text-align: center;
        .title{
            font-size: 40px;
            @media ${breakpoints.xs} {
                font-size   : 30px ;
            }
            font-family: 'Dancing Script',cursive;
        }
        .description{
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            font-weight: 300;
        }
    }

`;
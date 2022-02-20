import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const HeaderWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap');
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    // @media ${breakpoints.sm}{
    //     padding: 20px;
    // }

    .name{
        font-size: 22px;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;

    }

    // .mobile{
    //     display: none;
    //     @media ${breakpoints.sm} {
    //         display: block;
    //     }
    // }
`;

export const Nav = styled.div `
    display: flex;
    
    .item{
        font-size: 18px;
        padding: 0 10px;
        color: black;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
            font-weight: 300;

    }
`;


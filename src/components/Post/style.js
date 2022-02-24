import styled from "styled-components";
import breakpoints from "../../theme/breakpoints"

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

export const Flex = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    @media ${breakpoints.xs} {
        grid-template-columns:1fr;     
    }
    border: 0.5px solid  gray;
    margin: 16px 0px;
    p{
    margin: 0px;
    }
    .view{
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
    }
    .bannerWrapper{
        height: 100%;
        .banner{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .textWrapper{
        padding: 40px 48px;
        @media ${breakpoints.sm}  {
            padding: 20px 24px;
        }
        .view{
            padding-top: 10px;
            border-top: 1px solid black;
            
        }
    }
`;


export const PostWrapper = styled.div`
    .title{
        font-size: 26px;
        padding-bottom: 12px;
        font-family: 'Dancing Script', cursive;
    }
    .description{
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 15px;
        height: 110px;
    }
`;

export const PostUser = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    font-weight: 300;
    padding-bottom: 18px;
    .avata{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    p{
        font-size: 12px;
        padding-left: 10px;
    }   
`;
import styled from "styled-components";



export const Flex = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
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
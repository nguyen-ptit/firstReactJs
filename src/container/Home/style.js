import styled from "styled-components";

export const Banner = styled.div`
    padding: 0px 80px 120px 80px;
    img{
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    & > div {
    width: 940px;
  }
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
    }
`;
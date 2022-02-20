import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 70px;
    & > div {
    width: 1350px;
    
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;

export const Contact = styled.div`
    text-align: center;
    p{
        font-size: 15px;
        padding-bottom: 10px;
    }
    .title{
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
    }
`;


export const Grid = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #f7e8d3;
    form{

        padding: 50px 110px;
        input{
            width: 100%;
            padding: 12px;
            border: 1px solid black;
            box-sizing: border-box;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: vertical;
            background-color: transparent;  
        }
        .submit{
            text-align: center;
            width: 140px; 
            margin: 0 auto;
            background-color: #f7e8d3;

            input{
                margin: 0px;
                color: black;
                font-size: 15px;
            }
            &:hover{
                background-color: black;

            }
            input:hover{
                color: white;

            }
        }
    }
    .email{
        padding-right: 10px;
    }
`;




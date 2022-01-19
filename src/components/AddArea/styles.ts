import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .plus-sign{
        margin: 0 15px 10px 10px;
        padding: 0;
        font-size: 30px;
    }

    input{
        margin: 10px 0;
        border: none;
        background: none;
        outline: 0;
        color: #fff;
        font-size: 25px;
        flex: 1;
    }
`;
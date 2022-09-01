import styled from "styled-components";

export const HeaderCss = styled.div`
    width: 100vw;
    height: 100px;

    header{
        max-width: 1200px;
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img{
        width: 170px
    }
    button{
        padding: 10px 35px;
        border-radius: 20px;
        font-weight: 700;
        background-color: #FFF;
        font-size: 15px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;
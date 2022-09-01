import styled from "styled-components";

export const MainCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    .main-bg{
        max-width: 1200px;
        width: 100%;
        height: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .card{
        width: 100%;
        height: 400px;
        background-color: #FFf;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .textCard{
        margin: 100px;
        width: 430px;
    }
    .textCard h2{
        margin-bottom: 20px;
    }
    .textCard span{
        line-height: 27px;
        color: var(--GrayishBlue);
    }
    .imgCard{
        margin: 50px;
    }
    .imgCard img{
        height: 300px;
    }

    .buildYourCommunity{
        width: 70%;
        height: 200px;
        background-color: #FFf;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        transform: translateY(50%);
    }

    .buildYourCommunity h1{
        font-size: 32px;
        margin-bottom: 30px;
    }
    .buttonBuildCommunity{
        width: 40%;
        height: 50px;
    }
    .buttonBuildCommunity button{
        width: 100%;
        height: 100%;
        background-color: var(--Pink);
        color: #FFF;
        font-size: 16px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        cursor: pointer;
    }
`;
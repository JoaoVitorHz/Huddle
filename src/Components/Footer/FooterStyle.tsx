import styled from "styled-components";

export const FooterCss = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--VeryDarkCyan);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .footer-bg{
        max-width: 1200px;
        width: 100%;
        height: 90%;
        display: flex;
        gap: 100px;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
    .footerInformation{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .footerInformation i{
        color: #FFF;
        margin-right: 20px;
    }
    .footerInformation img{
        width: 300px;
        margin-bottom: 20px;
    }
    .footerInformation span{
        color: var(--VeryPaleCyan);
    }
    .textInformation{
        width: 400px;
        display: flex;
    }

    .footerMenu{
        width: 300px;
        display: flex;
        gap: 100px;
    }
    .footerMenu ul{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .footerMenu ul a{
        text-decoration: none;
        color: var(--VeryPaleCyan);
    }

    .footerIcons{
        width: 250px;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;
        transform: translateY(-70px);
    }
    .icons{
        display: flex;
        gap: 20px;
    }
    .iconMedia{
        width: 30px;
        height: 30px;
        border: 1px solid var(--VeryPaleCyan);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconMedia a{
        color: var(--VeryPaleCyan);
    }
    .copyright{
        font-size: 11px;
        color: var(--VeryPaleCyan);
    }
    .copyright i{
        margin-right: 5px;
    }
`;
import styled from "styled-components";
import Banner from "../../Assets/Banner/Banner.svg"

export const BannerCss = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--VeryPaleCyan);
    background-image: url(${Banner});

    .banner-bg{
        margin: auto;
        max-width: 1200px;
        width: 100%;
        height: 100%;
        display: flex;
    }
    .bannerLeftSide{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
    }
    .titleBanner{
        width: 400px;
        margin-bottom: 20px;
    }
    .textBanner{
        width: 460px;
        margin-bottom: 20px;
    }
    .buttonBanner{
        width: 240px;
        height: 40px;
    }
    .buttonBanner button{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        color: var(--VeryPaleCyan);
        background-color: var(--Pink);
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
    }
    .bannerRightSide{
        width: 50%;
        height: 100%;
    }
    .bannerRightSide img{
        width: 100%;
    }

`;
import { BannerCss } from "./BannerStyle"
import { Header } from "./Header/Header"
import Hero from "../../Assets/Banner/Hero.svg"

export function Banner(){
    return(
        <BannerCss>
            <Header />
            <div className="banner-bg">
                <div className="bannerLeftSide">
                    <div className="titleBanner">
                        <h1>Build The Community Your Fans Will Love</h1>
                    </div>
                    <div className="textBanner">
                        <span>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</span>
                    </div>
                    <div className="buttonBanner">
                        <button>Get Started for Free</button>
                    </div>
                </div>
                <div className="bannerRightSide">
                    <img src={Hero} alt="" />
                </div>
            </div>
        </BannerCss>
    )
}
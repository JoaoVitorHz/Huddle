import { MainCss } from "./MainStyle"
import imgTogether from "../../Assets/Card/imgTogether.svg"
import Flowing from "../../Assets/Card/Flowing.svg"
import YourUsers from "../../Assets/Card/YourUsers.svg"

export function Main(){
    return(
        <MainCss>
            <div className="main-bg">
                <div className="card">
                    <div className="textCard">
                        <h2>Grow Together</h2>
                        <span>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversation you miss out on with a feedback form.</span>
                    </div>
                    <div className="imgCard">
                        <img src={imgTogether} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="imgCard">
                        <img src={Flowing} alt="" />
                    </div>
                    <div className="textCard">
                        <h2>Flowing Conversations</h2>
                        <span>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</span>
                    </div>
                </div>

                <div className="card">
                    <div className="textCard">
                        <h2>Your Users</h2>
                        <span>It takes no time at all to integrate Huddle with your app´s authentications solutions. This means, once signed in to your app, your users can start chatting immediately.</span>
                    </div>
                    <div className="imgCard">
                        <img src={YourUsers} alt="" />
                    </div>
                </div>

                <div className="buildYourCommunity">
                    <h1>Ready To Build Your Community?</h1>
                    <div className="buttonBuildCommunity">
                        <button>Get Started For Free</button>
                    </div>
                </div>
            </div>
        </MainCss>
    )
}
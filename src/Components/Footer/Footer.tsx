import { FooterCss } from "./FooterStyle";
import logo from "../../Assets/Footer/logo.svg"

export function Footer() {
    return(
        <FooterCss>
            <div className="footer-bg">
                <div className="footerInformation">
                    <img src={logo} alt="" />
                    <div className="textInformation">
                        <div className="iconInformation">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti delectus voluptas iure, impedit dicta repellendus nemo, deserunt nihil dignissimos.</span>
                    </div>
                    <span><i className="fa-sharp fa-solid fa-phone-volume"></i>+1-543-123-4567</span>
                    <span><i className="fa-sharp fa-solid fa-envelope"></i>example@huddle.com</span>
                </div>
                <div className="footerMenu">
                    <ul>
                        <a href="">About Us</a>
                        <a href="">What We Do</a>
                        <a href="">FAQ</a>
                    </ul>
                    <ul>
                        <a href="">Career</a>
                        <a href="">Blog</a>
                        <a href="">Contact Us</a>
                    </ul>
                </div>
                <div className="footerIcons">
                    <div className="icons">
                        <div className="iconMedia">
                            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <div className="iconMedia">
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className="iconMedia">
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <span><i className="fa-regular fa-copyright"></i>Copyright 2018 Huddle. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </FooterCss>

    )
}
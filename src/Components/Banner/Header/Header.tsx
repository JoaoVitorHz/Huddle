import { HeaderCss } from "./HeaderStyle";
import Logo from "../../../Assets/header/logo.svg"

export function Header(){
    return(
        <HeaderCss>
                <header>
                    <img src={Logo} alt="" />
                    <button>Try It Free</button>
                </header>
        </HeaderCss>
    )
}
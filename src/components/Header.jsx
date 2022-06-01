import { NavLink } from "react-router-dom";
import homeLogo from "../assets/home-logo.png"

export default function Header (){
    return(
        <div className="header">
            <NavLink to = "/">
                <img src={homeLogo} alt ="homeLogo"/>
            </NavLink>
        </div>
    )
}
import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import LogoIcon from "../assets/icons";

const Header = () => {

    const {isDark,setIsDark} = useContext(ThemeContext);

    return(
        <header className = "header">
            <div className="container">
                <div className = "logo-wrapper">
                    <div className="logo">
                        <LogoIcon/>
                        <span>Haeun's Blog</span>
                    </div>
                    <button onClick={()=> setIsDark(!isDark)} className="icon">{isDark?'🌙':'🔆'}</button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
import React from "react";
import LogoIcon from "../assets/icons";

const Header = () => {
    return(
        <header className = "header">
            <div className="container">
                <div className = "logo-wrapper">
                    <div className="logo">
                        <LogoIcon/>
                        <span>Haeun's Blog</span>
                    </div>
                    <button className="icon">🔆</button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
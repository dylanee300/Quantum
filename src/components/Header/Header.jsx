import React from "react";
import './Header.css';

function Header() {


    return (
        <div className="header-containerpoo">
            <img src="/src/assets/QuantumLogo.png" alt="Logo" id="LogoImguwu" draggable="false" />
            
            <div id="searchcontainer">
                {/* Idea: Add mini poles, for what game to add here, etc */}
                <input type="text" placeholder="Search For a Game.." id="SearchGames" />


            </div>
            
            <div style={{width: '75px'}}></div>
        </div>
    )
}

export default Header; 
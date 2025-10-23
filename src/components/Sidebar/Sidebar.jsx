import React, { useState } from "react";
import './Sidebar.css';
import Login from '../../views/Login/Login.jsx';

function Sidebar({ onNavigateToLogin }) {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleGameClick = (gameName) => {
        setSelectedGame(gameName);
    };

    const renderGameContent = () => {
        if (selectedGame === 'Snow Rider') {
            return (
                <div>
                    {/* Yeah.. you gotta get that for yourself! */}
                    {/* Iframe for now... Eventoully we gotta find a way to make it go into a about:blank (I got no clue how to do that :3) url for bypass */}
                    <iframe src="{SNOW_RIDER_URL}" frameborder="0" id="SnowRider" target="about:blank"></iframe>

                </div>
            );
        }
        return (
            <div className="empty">

            </div>
        );
    };

    return (
        <div className="layout">
            <div className="menu">
                <h1 id="header">Games</h1>
                <p 
                    id="snow" 
                    className={selectedGame === 'Snow Rider' ? 'selected' : ''} 
                    onClick={() => handleGameClick('Snow Rider')}
                >
                    Snow Rider
                </p>

                <p id="adminLogin">Admin Login</p>

            </div>
            <div className="content">
                {renderGameContent()}
            </div>
        </div>
    )
}

export default Sidebar;


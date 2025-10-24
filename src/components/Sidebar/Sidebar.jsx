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
                    {/* Iframe for now... Eventually we gotta find a way to make it go into a about:blank url for bypass */}
                    <iframe 
                        src="about:blank" 
                        frameBorder="0" 
                        id="SnowRider" 
                        title="Snow Rider Game"
                        sandbox=""
                        style={{width: '100%', height: '500px'}}
                    ></iframe>
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


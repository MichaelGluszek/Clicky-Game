import React from "react";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <div className="container">

            <div className="title">
                <span class="navbar-brand mb-0 h1">Clicky-Game</span>
            </div>
            <div className="round-status">round-status</div>
            <div className="score">score</div>

        </div>
    )
}

export default NavBar;
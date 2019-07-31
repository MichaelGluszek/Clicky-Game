import React from "react";
import "../styles/NavBar.css";

function NavBar(props) {
    return (
        <div className="container">

            <div className="title">
                <span className="navbar-brand mb-0 h1">Clicky-Game</span>
            </div>

            <div className="roundStatus"></div>

            <div className="score">
                Score: {props.score} 
                            |
                Top Score: {props.topScore}
                         
            </div>

        </div>
    )
}

export default NavBar;
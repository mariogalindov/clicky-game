import React from "react";
import "./style.css"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1>Clicky Game!</h1>
            <p>Click any image to start the game, keep on clicking 
                them to earn points but don't click on any more than once! </p>

        </div>
    )
}

export default Header;
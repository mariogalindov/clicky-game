import React, { Component } from "react";
import "./style.css";
class Navbar extends Component {


    render() {

        return (
            <div>
                <nav className="navbar">
                    <div className="row">
                        <div className="col">
                            <a className="navbar-brand nav-item" href="/">Clicky Game!</a>
                        </div>
                        <div className="col nav-item" id="stText" href="/">
                            <h2>Status Text</h2>
                        </div>
                        <div className="col">
                            <h2>Score</h2>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
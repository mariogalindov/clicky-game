import React, { Component } from "react";
import "./style.css"

class NavMessage extends Component {
    state = {
        message: "",
        animating: false
    }





    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "You guessed correctly!";
        case "incorrect":
          return "You guessed incorrectly!";
        default:
          return "Click an image to begin!";
        }
      };
    
      render() {
        return (
          <li
            className={this.state.animating ? this.state.message : ""}
            onAnimationEnd={() => this.setState({ animating: false })}
          >
            {this.renderMessage()}
          </li>
        );
      }
}

export default NavMessage;
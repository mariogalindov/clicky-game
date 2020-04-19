import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header"
import Container from "../Container"
import ClickItem from "../ClickItem";
import data from "../../characters.json"

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    }
    render() {
        return (
            <div>
                <Nav  />
                <Header/>
                <Container>
                    {this.state.data.map(item => (
                        <ClickItem
                          key={item.id}
                          id={item.id}
                          shake={!this.state.score && this.state.topScore}
                          handleClick={this.handleItemClick}
                          image={item.image}
                        />
                    ))}
                </Container>

            </div>
        )
    }
}

export default Game;
import React from 'react';
// import './App.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Board from "./components/Board";
import characters from "./characters.json";
import CharacterCard from './components/CharacterCard';

class App extends React.Component {

  state = {
    clicked: false,
    stateCharacters: characters
  };

  render() {
    return (
      <Wrapper>
        <Navbar/>
        <Header/>
        <Board>
        {
          characters.map((character) =>
          <CharacterCard
          state={this.state}
          image={character.image}
          />
          )
        }
        </Board>
      </Wrapper>
    );
  }
  
}

export default App;

import React from "react";
import "./style.css";

function Board(props) {
  return <div className="board">{props.children}</div>;
}

export default Board;

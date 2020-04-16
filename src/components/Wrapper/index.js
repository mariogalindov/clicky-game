import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container-fluid" id="wrapper">{props.children}</div>;
}

export default Wrapper;

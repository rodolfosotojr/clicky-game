import React from "react";
import "./style.css";


//component for my Title
function Title(props) {
  return (
  <span>
  <h1 className="title">{props.children}</h1>;
  <h2 className="status">{props.status}</h2>
  <h2 className="score">{props.score}</h2>
  </span>
  )
}

export default Title;
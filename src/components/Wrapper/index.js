import React from "react";
import "./style.css";


//component for my Wrapper
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;

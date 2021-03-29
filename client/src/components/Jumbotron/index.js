import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4" id="jumbotronBackground">{children}</div>;
}

export default Jumbotron;

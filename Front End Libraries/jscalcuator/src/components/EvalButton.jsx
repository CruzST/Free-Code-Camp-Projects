import React from "react";
import "./css/EvalButton.css";

export const EvalButton = props => (
  <div className="evalButton" onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
);

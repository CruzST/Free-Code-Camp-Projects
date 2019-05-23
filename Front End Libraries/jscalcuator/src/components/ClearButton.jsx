import React from "react";
import "./css/ClearButton.css";

export const ClearButton = props => (
  <div className="clearButton" onClick={props.handleClear}>
    {props.children}
  </div>
);

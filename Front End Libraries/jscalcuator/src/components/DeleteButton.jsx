import React from "react";
import "./css/DeleteButton.css";

export const DeleteButton = props => (
  <div className="deleteButton" onClick={props.handleClear}>
    {props.children}
  </div>
);

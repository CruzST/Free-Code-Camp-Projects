import React from "react";
import "./css/Display.css";

export const Display = props => (
  <div className="displayDefault" id={props.id}>
    {props.input}
  </div>
);

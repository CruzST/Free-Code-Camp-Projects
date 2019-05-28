import React from "react";
import "./css/Button.css";

const isNumber = val => {
  // if it is a num true, else false
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <div
    className={`buttonWrap ${isNumber(props.children) ? null : "operator"}`}
    id={props.id}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

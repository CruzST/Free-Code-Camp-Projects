import React from "react";
import Button from "react-bootstrap/Button";

export const SetTimer = ({ type, value, handleClick, label }) => (
  <div className="SetTimer">
    <h2 id={`${type}-label`}>{`${label} Length`}</h2>
    <div className="SetTimerControls">
      <Button
        variant="primary"
        id={`${type}-decrement`}
        onClick={() => {
          handleClick(false, `${type}Value`);
        }}
      >
        &darr;
      </Button>
      <h2 id={`${type}-length`}>{value}</h2>
      <Button
        variant="primary"
        id={`${type}-increment`}
        onClick={() => {
          handleClick(true, `${type}Value`);
        }}
      >
        &uarr;
      </Button>
    </div>
  </div>
);

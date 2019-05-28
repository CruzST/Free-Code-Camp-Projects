import React from "react";
import Button from "react-bootstrap/Button";

export const Controls = ({ active, handleReset, handlePlayPause }) => (
  <div className="controls">
    <Button
      id="start-pause"
      variant={active ? "warning" : "success"}
      onClick={() => {
        handlePlayPause();
      }}
    >
      {active ? "Pause" : "Start"}
    </Button>
    <Button
      id="reset"
      variant="danger"
      onClick={() => {
        handleReset();
      }}
    >
      Reset
    </Button>
  </div>
);

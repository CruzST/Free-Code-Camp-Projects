import React from "react";

export const Timer = ({ timerMode, timerLength }) => (
  <div className="timer">
    <h1 id="timerLabel">{timerMode}</h1>
    <h1 id="timeLeft">{timerLength}</h1>
  </div>
);

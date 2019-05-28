import React, { Component } from "react";

import { SetTimer } from "./components/SetTimer";
import { Timer } from "./components/Timer";
import { Controls } from "./components/Controls";
import * as moment from "moment";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      timerMode: "Session",
      timerLength: 25 * 60 * 1000, // miliseconds
      active: false,
      touched: false
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.timerLength <= 0 && prevState.timerMode === "Session") {
      this.setState({
        timerLength: this.state.breakValue * 60 * 1000,
        timerMode: "Break"
      });
      this.audio.play();
      if (prevState.timerLength <= 0 && prevState.timerMode === "Break") {
        this.setState({
          timerLength: this.state.sessionValue * 60 * 1000,
          timerMode: "Session"
        });
        this.audio.play();
      }
    }
  }

  handleSetTimer = (incrementBool, sessionType) => {
    if (
      (this.state[sessionType] === 60 && incrementBool) ||
      (this.state[sessionType] <= 1 && !incrementBool)
    ) {
      return;
    }
    this.setState(state => ({
      [sessionType]: state[sessionType] + (incrementBool ? 1 : -1)
    }));
  };

  handleReset = () => {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      timerLength: 25 * 60 * 1000,
      active: false,
      timerMode: "Session",
      touched: false
    });
    clearInterval(this.pomodoro);
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  handlePlayPause = () => {
    if (this.state.active) {
      clearInterval(this.pomodoro);
      this.setState({ active: false });
    } else {
      if (this.state.touched) {
        this.pomodoro = setInterval(() => {
          this.setState(state => ({ timerLength: state.timerLength - 1000 }));
        }, 1000);
        this.setState({ active: true });
      } else {
        this.setState(
          {
            timerLength: this.state.sessionValue * 60 * 1000,
            touched: true,
            active: true
          },
          () => {
            this.pomodoro = setInterval(() => {
              this.setState(state => ({
                timerLength: state.timerLength - 1000
              }));
            }, 1000);
          }
        );
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <hr />

        <div className="clockWrapper">
          <div className="controlsWrapper">
            <SetTimer
              type="break"
              label="Break"
              value={this.state.breakValue}
              handleClick={this.handleSetTimer}
            />
            <SetTimer
              type="session"
              label="Session"
              value={this.state.sessionValue}
              handleClick={this.handleSetTimer}
            />
          </div>
          <Timer
            className="Timer"
            timerMode={this.state.timerMode}
            timerLength={moment(this.state.timerLength).format("mm:ss")}
          />
          <Controls
            active={this.state.active}
            handleReset={this.handleReset}
            handlePlayPause={this.handlePlayPause}
          />

          <audio
            id="beep"
            src="https://www.myinstants.com/media/sounds/yousoro_nIrN286.mp3"
            ref={ref => (this.audio = ref)}
          />
        </div>
      </div>
    );
  }
}

export default App;

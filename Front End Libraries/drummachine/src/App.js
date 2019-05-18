import React, { Component } from "react";

// components
import DrumButton from "./components/DrumButton";
// data
import sounds from "./data/sounds";
// css
import "./App.css";

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  //methods
  handleDisplay = display => {
    this.setState({ display });
  };

  // render
  render() {
    return (
      <div className="drum-machine">
        <h1>Drum machine</h1>
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {sounds.map(item => (
            <DrumButton
              id={item.id}
              letter={item.letter}
              src={item.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

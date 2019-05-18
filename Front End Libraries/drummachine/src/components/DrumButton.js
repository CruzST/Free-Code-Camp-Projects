import React, { Component } from "react";

class DrumButton extends Component {
  // constructor
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // life cycle methods
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // methods
  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  handleKeyDown = event => {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.handleClick();
    }
  };

  // render
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h2>{this.props.letter}</h2>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          id={this.props.letter}
          src={this.props.src}
        />
      </div>
    );
  }
}

export default DrumButton;

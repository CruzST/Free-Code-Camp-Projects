import React, { Component } from "react";
import "./App.css";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { DeleteButton } from "./components/DeleteButton";
import { EvalButton } from "./components/EvalButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      prevInput: ""
    };
  }

  // methods
  // es6 lets you avoid binding above

  concatInput = val => {
    if (isNaN(this.state.prevInput) && isNaN(val)) {
    } else {
      this.setState({ input: this.state.input + val });
      this.setState({ prevInput: val });
    }
  };

  // Eval is not safe, but math.eval did not work.
  handleEqual = () => {
    let string = this.state.input;
    this.setState({ input: eval(string) });
  };

  // render
  render() {
    return (
      <div className="App">
        <h1>React JS Calculator</h1>
        <div className="outerContainer">
          <div className="calcWrap">
            <Input input={this.state.input} />
            <div className="row">
              <ClearButton handleClear={() => this.setState({ input: "" })}>
                Clear
              </ClearButton>
              <DeleteButton handleClick={this.concatInput}>Del</DeleteButton>
              <Button handleClick={this.concatInput}>/</Button>
            </div>

            <div className="row">
              <Button handleClick={this.concatInput}>7</Button>
              <Button handleClick={this.concatInput}>8</Button>
              <Button handleClick={this.concatInput}>9</Button>
              <Button handleClick={this.concatInput}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatInput}>4</Button>
              <Button handleClick={this.concatInput}>5</Button>
              <Button handleClick={this.concatInput}>6</Button>
              <Button handleClick={this.concatInput}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatInput}>1</Button>
              <Button handleClick={this.concatInput}>2</Button>
              <Button handleClick={this.concatInput}>3</Button>
              <Button handleClick={this.concatInput}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatInput}>.</Button>
              <Button handleClick={this.concatInput}>0</Button>
              <EvalButton handleClick={() => this.handleEqual()}>=</EvalButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

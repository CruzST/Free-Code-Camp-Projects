import React, { Component } from "react";
import "./App.css";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { DeleteButton } from "./components/DeleteButton";
import { EvalButton } from "./components/EvalButton";
import { Display } from "./components/Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: "",
      input: "",
      prevInput: "",
      firstNumber: "",
      secondNumber: "",
      operator: ""
    };
  }

  // methods
  // es6 lets you avoid binding above

  concatInput = val => {
    if (isNaN(this.state.prevInput) && isNaN(val)) {
      // if the previous input is not a number, and the tentative
      // value is not a number, do nothing (ie: . or *)
    } else {
      this.setState({ input: this.state.input + val });
      this.setState({ displayInput: this.state.displayInput + val });
      this.setState({ prevInput: val });
    }
  };

  concatZeroInput = val => {
    // if this.state.input != "", add it.
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
      this.setState({ displayInput: this.state.displayInput + val });
    }
  };

  concatDecInput = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
      this.setState({ displayInput: this.state.displayInput + val });
    }
  };

  handleOperator = operator => {
    switch (operator) {
      case "plus":
        //console.log("add op is: " + operator);
        let sum =
          parseFloat(this.state.firstNumber) +
          parseFloat(this.state.secondNumber);

        this.setState({ firstNumber: sum });
        break;

      case "minus":
        //console.log("sub op is: " + operator);
        let difference =
          parseFloat(this.state.firstNumber) -
          parseFloat(this.state.secondNumber);

        this.setState({ firstNumber: difference });
        break;

      case "mult":
        let product =
          parseFloat(this.state.firstNumber) *
          parseFloat(this.state.secondNumber);

        this.setState({ firstNumber: product });
        break;

      case "divide":
        let dividend =
          parseFloat(this.state.firstNumber) /
          parseFloat(this.state.secondNumber);

        this.setState({ firstNumber: dividend });
        break;

      default:
    }
    this.setState({ input: "", secondNumber: "" });
  };

  /*
    EQUAL BUTTON LOGIC
    only called on the = button.  it assumes that there is no second number yet
    but there is one in the input waiting to be processed
  */
  handleEqual = () => {
    // if there is no input, do nothing
    if (this.state.input === "" || isNaN(this.state.prevInput)) {
      return;
    }
    let operator = this.state.operator;
    this.state.secondNumber = this.state.input;
    this.handleOperator(operator);
  };

  /*
    ADD FUNCTION

  */
  add = () => {
    // if the previous input is not a number or if there is no first number
    if (isNaN(this.state.prevInput) || this.state.displayInput === "") {
      return;
    }
    // logic
    let sum;
    let operator = this.state.operator;
    if (this.state.firstNumber === "") {
      // if there is no first number, then assign the input tot he first number
      sum = this.state.input;
      this.setState({ firstNumber: sum });
      this.setState({ input: "" });
    } else {
      // there is a first number so we want to start adding stuff
      // setState is async, use callback function to ensure the state has been set before using it
      if (this.state.secondNumber === "" && this.state.input !== "") {
        this.setState(
          state => ({ secondNumber: state.input }),
          () => {
            sum = this.handleOperator(operator);
          }
        );
      }
    }
    // change state, adding a + sign to the display string, indicate the op type and the previous char input
    // reset the input
    this.setState(state => ({ displayInput: state.displayInput + "+" }));
    this.setState({ operator: "plus" });
    this.setState({ prevInput: "+" });
  };

  /*
  SUBTRACT FUNCTION
  */
  subtract = () => {
    // if the previous input is not a number or if there is no first number
    if (isNaN(this.state.prevInput) || this.state.displayInput === "") {
      return;
    }

    // logic
    let operator = this.state.operator;
    let difference;
    if (this.state.firstNumber === "") {
      // if there is no first number, then assign the input tot he first number
      difference = this.state.input;
      this.setState({ firstNumber: difference });
      this.setState({ input: "" });
    } else {
      // there is a first number so we want to start subbing stuff
      // setState is async, use callback function to ensure the state has been set before using it
      if (this.state.secondNumber === "" && this.state.input !== "") {
        this.setState(
          state => ({ secondNumber: state.input }),
          () => {
            difference = this.handleOperator(operator);
          }
        );
      }
    }
    // change state, adding a + sign to the display string, indicate the op type and the previous char input
    // reset the input
    this.setState(state => ({ displayInput: state.displayInput + "-" }));
    this.setState({ operator: "minus" });
    this.setState({ prevInput: "-" });
  };

  /*
  Multiply FUNCTION
  */
  multiply = () => {
    // if the previous input is not a number or if there is no first number
    if (isNaN(this.state.prevInput) || this.state.displayInput === "") {
      return;
    }
    let operator = this.state.operator;
    // logic
    let product;
    if (this.state.firstNumber === "") {
      // if there is no first number, then assign the input tot he first number
      product = this.state.input;
      this.setState({ firstNumber: product });
      this.setState({ input: "" });
    } else {
      // there is a first number so we want to start subbing stuff
      // setState is async, use callback function to ensure the state has been set before using it
      if (this.state.secondNumber === "" && this.state.input !== "") {
        this.setState(
          state => ({ secondNumber: state.input }),
          () => {
            product = this.handleOperator(operator);
          }
        );
      }
    }
    // change state, adding a + sign to the display string, indicate the op type and the previous char input
    // reset the input
    this.setState(state => ({ displayInput: state.displayInput + "*" }));
    this.setState({ operator: "mult" });
    this.setState({ prevInput: "*" });
  };

  /*
  Divide FUNCTION
  */
  divide = () => {
    // if the previous input is not a number or if there is no first number
    if (isNaN(this.state.prevInput) || this.state.displayInput === "") {
      return;
    }
    let operator = this.state.operator;
    // logic
    let dividend;
    if (this.state.firstNumber === "") {
      // if there is no first number, then assign the input tot he first number
      dividend = this.state.input;
      this.setState({ firstNumber: dividend });
      this.setState({ input: "" });
    } else {
      // there is a first number so we want to start subbing stuff
      // setState is async, use callback function to ensure the state has been set before using it
      if (this.state.secondNumber === "" && this.state.input !== "") {
        this.setState(
          state => ({ secondNumber: state.input }),
          () => {
            dividend = this.handleOperator(operator);
          }
        );
      }
    }
    // change state, adding a + sign to the display string, indicate the op type and the previous char input
    // reset the input
    this.setState(state => ({ displayInput: state.displayInput + "/" }));
    this.setState({ operator: "divide" });
    this.setState({ prevInput: "/" });
  };

  // render
  render() {
    return (
      <div className="App">
        <h1>React JS Calculator</h1>
        <hr />
        {/*
        <h2>Data Values</h2>

        <div>Input: {this.state.input}</div>
        <div>Prev Input: {this.state.prevInput}</div>
        <div>firstNumber: {this.state.firstNumber}</div>
        <div>secondNumber: {this.state.secondNumber}</div>
        <div>operator: {this.state.operator}</div>

        */}
        <div className="outerContainer">
          <div className="calcWrap">
            <div className="row" id="display">
              <Display input={this.state.displayInput} id="calcString" />
              <Display input={this.state.firstNumber} id="sumDisplay" />
            </div>

            <Input input={this.state.input} />
            <div className="row">
              <ClearButton
                handleClear={() => this.setState({ input: "" })}
                id="clear"
              >
                Clear
              </ClearButton>
              <DeleteButton handleClick={this.concatInput}>Del</DeleteButton>
              <Button handleClick={this.divide}>/</Button>
            </div>

            <div className="row">
              <Button handleClick={this.concatInput} id="seven">
                7
              </Button>
              <Button handleClick={this.concatInput} id="eight">
                8
              </Button>
              <Button handleClick={this.concatInput} id="nine">
                9
              </Button>
              <Button handleClick={this.multiply} id="multiply">
                *
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatInput} id="four">
                4
              </Button>
              <Button handleClick={this.concatInput} id="five">
                5
              </Button>
              <Button handleClick={this.concatInput} id="six">
                6
              </Button>
              <Button handleClick={this.subtract} id="subtract">
                -
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatInput} id="one">
                1
              </Button>
              <Button handleClick={this.concatInput} id="two">
                2
              </Button>
              <Button handleClick={this.concatInput} id="three">
                3
              </Button>
              <Button handleClick={this.add} id="add">
                +
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.concatDecInput} id="decimal">
                .
              </Button>
              <Button handleClick={this.concatZeroInput} id="zero">
                0
              </Button>
              <EvalButton handleClick={() => this.handleEqual()}>=</EvalButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Output from "./Output";
import Navbar from "./Navbar";

// dependencies

class App extends Component {
  constructor() {
    super();
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  state = {
    markdown:
      "# H1\n## H2\n[Link](https://www.google.com)\n1. Number List item\n**Bold**\n\n*Italics*\n\n`Inline Code`"
  };

  updateMarkdown(event) {
    event.preventDefault();
    this.setState({ markdown: event.target.value });
  }

  render() {
    let { markdown } = this.state; // destructure the state and pull markdown out of it

    return (
      <fragment>
        <Navbar />
        <div className="container">
          <br />
          <div className="row">
            <div className="col">
              <Input update={this.updateMarkdown} />
            </div>
            <div className="col">
              <Output plaintext={markdown} />
            </div>
          </div>
        </div>
      </fragment>
    );
  }
}

export default App;

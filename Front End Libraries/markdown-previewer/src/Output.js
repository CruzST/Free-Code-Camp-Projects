import React, { Component } from "react";

// bring in the marked library
let marked = require("marked");

class Output extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="output">
        <h1>Output</h1>
        <div
          dangerouslySetInnerHTML={{ __html: marked(this.props.plaintext) }}
          id="preview"
        />
      </div>
    );
  }
}

export default Output;

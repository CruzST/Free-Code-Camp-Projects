import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super();
  }

  render() {
    let placeholdertext =
      "Some Sample Markdowns:\n# H1\n## H2\n[Link](https://www.google.com)\n1. Number List item\n**Bold**\n*Italics*\n`Inline Code`\n\nTry raw html too!";
    return (
      <form id="input" className="form-group">
        <h1>Input</h1>
        <textarea
          placeholder={placeholdertext}
          onChange={this.props.update}
          id="editor"
        />
      </form>
    );
  }
}

export default Input;

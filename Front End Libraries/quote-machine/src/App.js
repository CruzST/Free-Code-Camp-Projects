import React, { Component } from "react";

import anime_quote from "./animeQuotesDB";
import QuoteComponent from "./QuoteComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quoteDB: anime_quote,
      quoteSingle: anime_quote[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.name === "newQuote") {
      let randomNum = Math.floor(Math.random() * this.state.quoteDB.length);
      this.setState({ quoteSingle: this.state.quoteDB[randomNum] });
    }
  }

  render() {
    // Obtain a random quote object and destructure it

    return (
      <div className="App">
        <h1 className="App-header">Anime centered Quote Machine</h1>
        <QuoteComponent quote={this.state.quoteSingle} />
        <button name="newQuote" onClick={this.handleClick} id="new-quote">
          Get New Quote
        </button>
      </div>
    );
  }
}

export default App;

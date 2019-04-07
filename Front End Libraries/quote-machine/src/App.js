import React, { Component } from "react";

import anime_quote from "./animeQuotesDB";
import QuoteComponent from "./QuoteComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quoteDB: anime_quote,
      quoteSingle: anime_quote[0],
      tweetURL:
        "https://twitter.com/intent/tweet?text=" +
        anime_quote[0].quotesentence +
        " -" +
        anime_quote[0].quotecharacter +
        " of " +
        anime_quote[0].quoteanime
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.name === "newQuote") {
      let randomNum = Math.floor(Math.random() * this.state.quoteDB.length);
      this.setState({ quoteSingle: this.state.quoteDB[randomNum] });

      // set the state url.
      let url =
        "https://twitter.com/intent/tweet?text=" +
        this.state.quoteDB[randomNum].quotesentence +
        " -" +
        this.state.quoteDB[randomNum].quotecharacter +
        " of " +
        this.state.quoteDB[randomNum].quoteanime;
      this.setState({ tweetURL: url });
    }
  }

  render() {
    // Obtain a random quote object and destructure it

    return (
      <div className="App">
        <h1 className="App-header">Anime centered Quote Machine</h1>
        <QuoteComponent quote={this.state.quoteSingle} />
        <button
          className="button"
          name="newQuote"
          onClick={this.handleClick}
          id="new-quote"
        >
          Get New Quote
        </button>

        <a
          href={this.state.tweetURL}
          className="button"
          name="tweetQuote"
          id="tweet-quote"
          target="__blank"
        >
          Tweet it out!
        </a>
      </div>
    );
  }
}

export default App;

import React from "react";

function QuoteComponent(props) {
  return (
    <div id="quote-box">
      <h2 id="text">"{props.quote.quotesentence}"</h2>
      <h3 id="author" className="author-show">{`${
        props.quote.quotecharacter
      }`}</h3>
      <h3 id="show" className="author-show">{`${props.quote.quoteanime}`}</h3>
    </div>
  );
}

export default QuoteComponent;

import React from 'react';
import $ from 'jquery';

export default Question = React.createClass({
  render: function() {
    return (
      <article>
      <h1>{this.state.title}</h1>
      <p>{this.state.clues[0].question}</p>
      <input type="text" />
      <input type="submit" />
      </article>
    )
  }
})

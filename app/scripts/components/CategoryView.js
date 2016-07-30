import React from 'react';
import $ from 'jquery';

const Category = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      clues: []
    }
  },
  componentDidMount: function(id) {
    $.ajax(`http://jservice.io/api/category?id=1`)
      .then((category) => {
        this.setState(category);
        console.log(this.state.clues[0].question)
      })
  },
  clickHandler: function(qNum) {
    console.log(this.params);
  },
  render: function() {
    return (
      <article>
				<h1>{this.state.title}</h1>
        <h3 onClick={this.clickHandler} className="v200">200</h3>
        <h3 onClick={this.clickHandler} className="v400">400</h3>
        <h3 onClick={this.clickHandler} className="v600">600</h3>
        <h3 onClick={this.clickHandler} className="v800">800</h3>
        <h3 onClick={this.clickHandler} className="v1000">1000</h3>
      </article>
    )
  }
})

export default Category;

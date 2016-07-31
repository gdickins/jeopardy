import React from 'react';
import $ from 'jquery';

let Category = React.createClass({
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
      })
  },
  clickHandler: function(evt) {
    console.log(this.state);
    if(evt.nativeEvent.target.className === 'v200') {
      console.log(this.state.clues[0].question)
    } else if(evt.nativeEvent.target.className === 'v400') {
      console.log(this.state.clues[1].question)
    }else if(evt.nativeEvent.target.className === 'v600') {
      console.log(this.state.clues[2].question)
    }else if(evt.nativeEvent.target.className === 'v800') {
      console.log(this.state.clues[3].question)
    }else if(evt.nativeEvent.target.className === 'v1000') {
      console.log(this.state.clues[4].question)
    };
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

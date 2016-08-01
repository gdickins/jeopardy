import React from 'react';

import $ from 'jquery';
import CategoryModel from '../models/CategoryModel';
import store from '../store';

const Modal = React.createClass({
  submitAnswer: function(evt){
    evt.preventDefault();

    let response = this.refs.response.value.toLowerCase().trim();
    let answer = this.props.clue.answer.toLowerCase().trim();


    if (response === this.props.clue.answer) {
     store.score.correctAnswer(this.props.clue);
    } else {
      store.score.wrongAnswer(this.props.clue);
    }
    this.props.hideModal();

  },
  render: function(){
    return (
      <div className="modal-container">
        <form className="modal" onSubmit={this.submitAnswer}>
          <h2>{this.props.clue.question}</h2>
          <input className="input-answer" type="text" placeholder="type in your answer..." ref="response"/>
          <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer} />
          <input className="pass-btn" type="button" value="pass" onClick={this.submitAnswer} />
        </form>
        <div className="answer-reveal">
          {this.props.clue.answer}
        </div>
      </div>
    );
  }
});

export default Modal;

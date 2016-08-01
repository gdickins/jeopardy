import Backbone from 'backbone';
import store from '../store';

const Score = Backbone.Model.extend({
  defaults: {
    correct: 0,
    incorrect: 0,
    winnings: 0
  },
  correctAnswer: function(clue){
    let newScore = clue.value + this.get('winnings');
    this.set('winnings', newScore);
    this.trigger('change');
  },
  wrongAnswer: function(clue){
    let newScore = this.get('winnings') - clue.value;
    this.set('winnings', newScore);
    this.trigger('change');
  }
});

export default Score;

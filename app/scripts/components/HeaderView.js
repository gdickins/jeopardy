import React from 'react';
import $ from 'jquery';

import {router, Route, hashHistory} from 'react-router';
import BoardView from './BoardView';
import store from '../store';

const HeaderView = React.createClass({
  runNewGame: function(){
    store.categories.reset();
    store.categories.makeNewGame();
  },
  render: function() {
      return (
        <div>
          <header>
          <h1>Jeopardy!</h1>
          </header>
        </div>
      );
  }
});

export default HeaderView;

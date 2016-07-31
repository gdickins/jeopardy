import React from 'react';
import $ from 'jquery';

import CategoryView from './CategoryView';

let GameBoard = React.createClass({
  render: function() {
    return (
      <article>
      <CategoryView/>
      <CategoryView/>
      <CategoryView/>
      <CategoryView/>
      <CategoryView/>
      </article>
    )
  }
})

export default GameBoard;

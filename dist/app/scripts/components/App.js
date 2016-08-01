import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import BoardView from './BoardView';
import HeaderView from './HeaderView';

const App = React.createClass({

  render: function(){
    return (
      <div>
        <HeaderView/>
       {this.props.children}
      </div>
    );
  }
});

export default App;

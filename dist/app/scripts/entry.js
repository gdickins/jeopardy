import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import BoardView from './components/BoardView';

const router = (
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BoardView} />

    </Route>
  </Router>
);

ReactDOM.render(router, document.querySelector('#app'));

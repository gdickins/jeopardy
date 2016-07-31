import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Backbone from 'backbone';
import $ from 'jquery';

import GameBoard from './components/GameBoard';

const goodCategories = [1, 3, 4, 7, 9];

const GameRouter = (
    	<Router history={hashHistory}>
    		<Route path="/" component={GameBoard}/>
    	</Router>
    )


ReactDOM.render(GameRouter, document.getElementById('container'))

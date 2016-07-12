import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import $ from 'jquery';
import Playground from './pages/Playground.js';
import Profile from './pages/Profile.js';
import '../css/main.css';
import './layouts/Playground_RWD.js';

const app = $('#app')[0];

ReactDOM.render(   
    <Router history={hashHistory}>
        <Route path="playground" component={Playground}></Route>
        <Route path="profile" component={Profile}></Route>
    </Router>, 
app);
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from "react-router";

import App from './App';
import Playground from '../playground/Playground';
import Profile from '../profile/Profile';

import $ from 'jquery';

import '../../css/main.css';

const app = $('#app')[0];

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/playground"></IndexRedirect>
            <Route path="playground" component={Playground}></Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>,
app);
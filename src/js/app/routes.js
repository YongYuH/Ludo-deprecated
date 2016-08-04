import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from "react-router";

import App from './App';
import Playground from '../playground/Playground';
import Profile from '../profile/Profile';
import Create from '../create/Create';
import Friend from '../friend/Friend';

import '../../stylesheets/main.scss';

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/playground"></IndexRedirect>
            <Route path="playground" component={Playground}></Route>
            <Route path="profile" component={Profile}></Route>
            <Route path="create" component={Create}></Route>
            <Route path="friend" component={Friend}></Route>
        </Route>
    </Router>,
app);
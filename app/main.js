import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Playground from './js/Playground.js';
// import './js/Playground_RWD.js';
import './css/main.css';

render( <Playground />, $('#content')[0] );
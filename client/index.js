/**
 * ./client/index.js
 * Index of the frontend
 */
import React from 'react';
import ReactDOM from 'react-dom';
/*eslint-disable no-unused-vars*/
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
/*eslint-enable no-unused-vars*/
import Routes from './routes';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

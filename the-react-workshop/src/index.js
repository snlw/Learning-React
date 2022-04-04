import React from 'react';
// ReactDOM is a library that provides interaction with the DOM layer of the browser.
import ReactDOM from 'react-dom';
import './index.css';
import {
  FunctionalApp, 
  ClassApp,
  BuyStuffApp} from './App';
import LoginApp from './LoginApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // StrictMode helps to spot potential errors in advance.
  // It performs code checks only during development time and it does not work in the production run.
  <React.StrictMode>
    <LoginApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

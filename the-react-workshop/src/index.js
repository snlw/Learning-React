import React from 'react';
// ReactDOM is a library that provides interaction with the DOM layer of the browser.
import ReactDOM from 'react-dom';
import './index.css';
// import {UnderstandingLifecycleApp} from './apps/App';
// import LoginApp from './apps/LoginApp';
// import BlogApp from './apps/BlogApp';
// import QuizApp from './apps/QuizApp';
// import App from './apps/ProfileApp';
// import App from './apps/CommunicationBetweenComponents';
// import MemoryGameApp from './apps/MemoryGameApp';
// import TemperatureConverter from './apps/TemperatureConverterApp';
// import ContextApp from './apps/ContextApp'
// import Counter from './apps/useReducer.example';
// import NameFields from './apps/useId.example';
import App from './apps/useState.example';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // StrictMode helps to spot potential errors in advance.
  // It performs code checks only during development time and it does not work in the production run.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

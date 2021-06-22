import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primary from './components/primary/primary.components';

ReactDOM.render(
  <React.StrictMode>
    <head><script src="https://kit.fontawesome.com/b5469fb752.js" crossorigin="anonymous"></script></head>
    <div className ='banner'>
      <Primary />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

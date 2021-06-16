import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 *  PAra uikit
*/
import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
/**
 * end uikit
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importar mis elementos de confi
import { BrowserRouter } from 'react-router-dom';
import UIkit from 'uikit';
//cosas para usar bien uikit
import Icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"

UIkit.use(Icons)
//para envolver al app en las funcionalidades de react-router-dom
        /* estoy usando () parentesis*/
const WithRouter = ()=> (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)


ReactDOM.render(
  <WithRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

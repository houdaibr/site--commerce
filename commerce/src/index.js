import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{BrowserRouter as Router} from'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './context';
ReactDOM.render(<ProductProvider>
  <Router>
    <App></App>
  </Router>
</ProductProvider>,


  document.getElementById('root')
);


reportWebVitals();

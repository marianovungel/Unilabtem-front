import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvidor } from './Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvidor>
      <App />
    </ContextProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);

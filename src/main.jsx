// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';  // Ensure this line is present to import the CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Verifique se este arquivo existe, ou remova a linha se não precisar dele
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Certifique-se que o caminho para App.js está correto

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Certifique-se que existe um elemento com id="root" no index.html
);
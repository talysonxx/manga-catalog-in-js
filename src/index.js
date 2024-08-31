import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import Botoes from './components/IconButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const buttons = ReactDOM.createRoot(document.getElementById('buttons'));
buttons.render(
  <React.StrictMode>
    <Botoes />
  </React.StrictMode>
);


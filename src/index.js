import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function executeSearch() {
  const inputValue = document.querySelector('.input-field').value;
  console.log('Input value:', inputValue);
}

document.querySelector('.input-field').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      executeSearch();
  }
});

document.querySelector('.search-button').addEventListener('click', function() {
  executeSearch();
});
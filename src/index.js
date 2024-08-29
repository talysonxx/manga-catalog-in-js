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
  // Coloque aqui a lógica que você quer executar com o valor do input
}

// Adicionar o listener para o pressionamento da tecla Enter no input
document.querySelector('.input-field').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // Evita a submissão do formulário, se houver
      executeSearch();
  }
});

// Adicionar o listener para o clique no botão de busca
document.querySelector('.search-button').addEventListener('click', function() {
  executeSearch();
});
import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Top Mangás");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [cache, setCache] = useState({}); // Cache para armazenar resultados de busca

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        setLoading(true);
        let response = await axios.get('https://api.jikan.moe/v4/top/manga?limit=5');
        setMangas(response.data.data);
      } catch (error) {
        console.error('Erro ao carregar os mangás:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMangas();
  }, []);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const executeSearch = useCallback(async () => {
    try {
      setLoading(true);
      await delay(9999999); // Adiciona um pequeno delay para evitar muitas requisições seguidas

      const A = document.querySelector('.input-field').value;
      if (!A) return; // Evita busca se o campo de entrada estiver vazio

      if (cache[A]) { // Verifica se a busca já está no cache
        setMangas(cache[A]);
        setTitulo(`Search Query: ${A}`);
        return;
      }

      let response = await axios.get(`https://api.jikan.moe/v4/manga?q=${A}&order_by=popularity&type=manga&page=1`);
      
      if (response.data.data.length >= 1) {
        setMangas(response.data.data);
        setTitulo(`Search Query: ${A}`);
        setCache(prevCache => ({ ...prevCache, [A]: response.data.data })); // Armazena no cache
      } else {
        setTitulo("Not Found");
        setMangas([]);
      }
    } catch (error) {
      console.error('Erro ao carregar os mangás:', error);
      setTitulo("Not Found");
      setMangas([]);
    } finally {
      setLoading(false);
    }
  }, [cache]);

  const handleSearch = (event) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchTimeout(setTimeout(executeSearch, 1000)); // Debouncing para limitar requisições rápidas
  };

  useEffect(() => {
    const inputField = document.querySelector('.input-field');
    inputField.addEventListener('keydown', executeSearch);

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', executeSearch);

    return () => {
      inputField.removeEventListener('keydown', handleSearch);
      searchButton.removeEventListener('click', executeSearch);
    };
  }, [executeSearch]);

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
        <div className="loading-icon" style={{ margin: "auto" }}>
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <div className="manga-container">
        {mangas.map(manga => (
          <div key={manga.mal_id} className="manga-box box">
            <img src={manga.images.jpg.large_image_url} alt={manga.title} />
            <h2 style={{ textOverflow: "hidden" }}>{manga.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

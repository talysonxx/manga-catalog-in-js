import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import MangaList from "./components/MangaList";
import Alerta from "./components/SnackBar";

const sleep = ms => new Promise(r => setTimeout(r, ms)); 

function App() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  


  
  const fetchMangas = useCallback(async () => {
    setLoading(true);
    try {
      const Popular = await axios.get("https://api.jikan.moe/v4/top/manga");
      setTitulo("Top Mangás");
      setMangas(Popular.data.data);
      await sleep(2000);
    } catch (error) {
      setSnackbarMessage("Erro: " + error.response.statusText);
      setSnackbarOpen(true);
    } finally {
      setLoading(false);

    }
  }, []);

  useEffect(() => {
    fetchMangas();
  }, [fetchMangas]);

  const executeSearch = async () => {
    try {
      const A = document.querySelector(".input-field").value;

      // O valor do input deve conter pelo menos 1 letra ou número
      if (A === "") {
        return;
      } else if (!/^$|^[a-zA-Z0-9].*$|^.*[a-zA-Z0-9]$/.test(A)) {
        setSnackbarMessage("Entrada inválida! Deve começar com uma letra ou número!");
        setSnackbarOpen(true);
        return;
      } else {
        setLoading(true);
        await sleep(1000);
        const response = await axios.get(
          `https://api.jikan.moe/v4/manga?q=${A}&type=manga&page=1&sfw=true&limit=20`
        );

        if (response.data.data.length > 0) {
          setMangas(response.data.data);
          setTitulo(`${A}`);
        } else {
          setTitulo("Not Found :(");
          setMangas([]);
        }
      }
    } catch (error) {
      setSnackbarMessage("Erro: " + error.response.statusText);
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const inputField = document.querySelector(".input-field");
    const searchButton = document.querySelector(".search-button");
    const homeButton = document.getElementById("home");

    const handleEnterKey = (event) => {
      if (!loading && event.key === "Enter") {
        event.preventDefault();
        executeSearch();  
      }
    };

    inputField.addEventListener("keydown", handleEnterKey);
    searchButton.addEventListener("click", executeSearch);
    homeButton.addEventListener("click", fetchMangas);

    return () => {
      inputField.removeEventListener("keydown", handleEnterKey);
      searchButton.removeEventListener("click", executeSearch);
      homeButton.removeEventListener("click", fetchMangas);
    };
  }, [executeSearch, fetchMangas, loading]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
        <div className="loading-icon" style={{ margin: "auto" }}>
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      </div>
    );
  }

  
  return (
    <div className="App">
      <h1>{titulo}</h1>
      <MangaList mangas={mangas} />
      <Alerta
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
}

export default App;

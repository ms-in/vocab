import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/word.json';

function App() {
  const wordArray = data.words || [];
  const [word, setWord] = useState('');

  const getRandomWord = () => wordArray[Math.floor(Math.random() * wordArray.length)];
  const setRandomWord = () => setWord(getRandomWord());

  useEffect(() => {
    setRandomWord()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>recall the word</h1>
      </header>
      <section className="App-body">
        <h2>{word}</h2>
      </section>
      <footer className="App-footer">
        <button onClick={setRandomWord}>Next Word</button>
      </footer>
    </div>
  );
}

export default App;
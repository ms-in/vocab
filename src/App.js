import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/word.json';

function App() {
  const wordArray = data.words;
  const [word, setWord] = useState('');
  const getRandomN = () => Math.floor(Math.random() * wordArray.length);
  const setRandomWord = () => {
    let index = getRandomN();
    setWord(wordArray[index]);
    wordArray.splice(index, 1);
  }

  useEffect(() => {
    setRandomWord()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>recall the word</h1>
      </header>
      <section className="App-body">
        {word ? <h2>{word}</h2> : <span className="noWord">No word is remaining, <br /> please refresh the page.</span>}
      </section>
      <footer className="App-footer">
        {word && <button onClick={setRandomWord}>Next Word</button>}
      </footer>
    </div>
  );
}

export default App;
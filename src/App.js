import "./styles.css";
import React, { useState, useEffect } from 'react';


export default function App() {
  const STARTING_TIME = 10;
const [ text, setText ] = useState('');
const [ timeRemaining, setTimeRemaining ] = useState(STARTING_TIME);
const [ gameStart, setGameStart ] = useState(false);

function handleChange(e) {
  const { value } = e.target
  setText(value)
}

function startGame(){
  setGameStart(true)
  if(timeRemaining === 0 && !gameStart){
setTimeRemaining(STARTING_TIME);
setText('');
  }
}

function calculateWordCount(textVariable){
  const wordsArr = textVariable.trim().split(' ')
  return wordsArr.filter(word => word !== '').length
}

useEffect(() => {
  if(timeRemaining > 0 && gameStart){
    setTimeout(() => {
      setTimeRemaining(time => time - 1)
    }, 1000)
  } else if(timeRemaining === 0){
setGameStart(false);
  }
  }, [timeRemaining, gameStart])
  // the dependency array tells useEffect to run every time one
  // of the dependencies in the array change. 


  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
      onChange={handleChange}
      value={text}
      ></textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Play Game</button>
      <h1>Word count: {calculateWordCount(text)}</h1>
    </div>
  );
}

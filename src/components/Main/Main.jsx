import { useEffect, useState } from 'react';
import Setup from '../Setup/Setup';
import Game from '../Game/Game';
import Notification from '../Notification/Notification';
import './Main.css';

function Main() {
  // Put this back to []
  const [correctWord, setCorrectWord] = useState(['C', 'A', 'T']);
  // Put this back to '_'
  const [gameWord, setGameWord] = useState('___');
  const [rightGuesses, setRightGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  // Put this back to false
  const [gameIsStarted, setGameIsStarted] = useState(true);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  // Put this back to null
  const [timeLeft, setTimeLeft] = useState(600);
  const [timeUp, setTimeUp] = useState(false);

  const handleLetterClick = (letter) => {
    if (correctWord.includes(letter)) {
      setRightGuesses([...rightGuesses, letter]);
      updateWord(letter, correctWord);
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
    }
  };

  const setWord = (word) => {
    setCorrectWord(Array.from(word));
    const wordToSet = word
      .split('')
      .map((letter) => (rightGuesses.includes(letter) ? letter : '_'))
      .join('');
    setGameWord(wordToSet);
  };

  const updateWord = (letter, word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      const current = word[i];
      if (letter === current) {
        newWord += letter;
      } else {
        newWord += gameWord[i];
      }
    }
    setGameWord(newWord);
  };

  const wordIsGuessed = gameWord === correctWord.join('');

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true);
    }
    if (timeUp) {
      console.log('Main useEffect timeup');
      setGameIsOver(true);
    }
    if (wordIsGuessed) {
      console.log('WIN');
      setGameIsOver(true);
      setWonGame(true);
    }
  }, [
    gameIsStarted,
    timeLeft,
    timeUp,
    correctWord,
    gameWord,
    wordIsGuessed,
  ]);

  return !gameIsStarted ? (
    <Setup
      setWord={setWord}
      setTimeLeft={setTimeLeft}
      setGameIsStarted={setGameIsStarted}
    />
  ) : (
    <>
      <Game
        gameIsOver={gameIsOver}
        correctWord={correctWord}
        gameWord={gameWord}
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
        handleLetterClick={handleLetterClick}
        timeLeft={timeLeft}
      />
      <Notification
        gameIsOver={gameIsOver}
        wonGame={wonGame}
        gameWord={gameWord}
      />
    </>
  );
}

export default Main;

import { useEffect, useState } from 'react';
import Setup from '../Setup/Setup';
import Game from '../Game/Game';
import Notification from '../Notification/Notification';
import './Main.css';

function Main() {
  const [correctWord, setCorrectWord] = useState([]);
  const [gameWord, setGameWord] = useState('_');
  const [rightGuesses, setRightGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
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

  const resetGame = () => {
    setCorrectWord([]);
    setGameWord('_');
    setRightGuesses([]);
    setWrongGuesses([]);
    setGameIsStarted(false);
    setGameIsOver(false);
    setWonGame(false);
    setTimeLeft(60);
    setTimeUp(false);
  };

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
        resetGame={resetGame}
      />
    </>
  );
}

export default Main;

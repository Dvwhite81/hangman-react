import { useEffect, useState } from 'react';
import Setup from '../Setup/Setup';
import Game from '../Game/Game';
import Notification from '../Notification/Notification';
import Modal from '../Modal/Modal';
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
  const [isError, setIsError] = useState(false);
  const [isEasyMode, setIsEasyMode] = useState(false);

  const handleLetterClick = (letter) => {
    if (
      rightGuesses.includes(letter) ||
      wrongGuesses.includes(letter)
    ) {
      return;
    }
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

  const errorContent = (
    <div id="modal-content">
      <h2>Please input a length!</h2>
      <h3>3, 4, 5, 6, 7, or 8</h3>
      <button
        id="modal-submit-btn"
        type="button"
        onClick={() => setIsError(false)}
      >
        Okay!
      </button>
    </div>
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true);
    }
    if (timeUp) {
      setGameIsOver(true);
    }
    if (!isEasyMode && wrongGuesses.length === 8) {
      setGameIsOver(true);
    }
    if (wordIsGuessed) {
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
    wrongGuesses.length,
    isEasyMode,
  ]);

  return !gameIsStarted ? (
    <>
      <Setup
        setWord={setWord}
        setTimeLeft={setTimeLeft}
        setIsEasyMode={setIsEasyMode}
        setGameIsStarted={setGameIsStarted}
      />
      <Modal setOpen={isError} content={errorContent} />
    </>
  ) : (
    <>
      <Game
        gameIsOver={gameIsOver}
        gameWord={gameWord}
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
        handleLetterClick={handleLetterClick}
        timeLeft={timeLeft}
        isEasyMode={isEasyMode}
      />
      <Notification
        gameIsOver={gameIsOver}
        wonGame={wonGame}
        correctWord={correctWord}
        resetGame={resetGame}
      />
    </>
  );
}

export default Main;

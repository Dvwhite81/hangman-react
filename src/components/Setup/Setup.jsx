import { useState } from 'react';
import {
  three,
  four,
  five,
  six,
  seven,
  eight,
} from '../../assets/text/words';
import './Setup.css';

function Setup({
  setWord,
  setTimeLeft,
  setIsEasyMode,
  setGameIsStarted,
}) {
  const [length, setLength] = useState(null);
  const [firstComplete, setFirstComplete] = useState(false);

  const getRandomWord = () => {
    let words;
    switch (length) {
      case 3:
        words = three;
        break;
      case 4:
        words = four;
        break;
      case 5:
        words = five;
        break;
      case 6:
        words = six;
        break;
      case 7:
        words = seven;
        break;
      case 8:
        words = eight;
        break;
      default:
        break;
    }
    const random = Math.floor(Math.random() * words.length);
    return words[random];
  };

  const handleFirstClick = () => {
    if (length === null) {
      return;
    }
    const word = getRandomWord(length);
    setWord(word);
    setFirstComplete(true);
  };

  const handleSecondClick = (mode) => {
    const time = length * 60;
    setTimeLeft(time);
    setIsEasyMode(mode);
    setGameIsStarted(true);
  };

  return (
    <div id="setup-container">
      <h1>Welcome to Hangman!</h1>
      {!firstComplete ? (
        <h2>How many letters?</h2>
      ) : (
        <h2>Easy or hard mode?</h2>
      )}
      <div id="setup-input">
        {!firstComplete ? (
          <>
            <input
              id="number-input"
              type="number"
              min={3}
              max={8}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <button
              id="number-submit"
              className="setup-btn"
              type="submit"
              onClick={handleFirstClick}
            >
              Start
            </button>
          </>
        ) : (
          <>
            <button
              id="easy-mode"
              className="setup-btn"
              type="submit"
              onClick={() => handleSecondClick(true)}
            >
              Easy
            </button>
            <button
              id="hard-mode"
              className="setup-btn"
              type="submit"
              onClick={() => handleSecondClick(false)}
            >
              Hard
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Setup;

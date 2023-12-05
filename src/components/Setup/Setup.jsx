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

function Setup({ setWord, setTimeLeft, setGameIsStarted }) {
  const [length, setLength] = useState(null);

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

  const handleClick = () => {
    console.log('handleClick length:', length);
    const word = getRandomWord(length);
    console.log('handleClick word:', word);
    setWord(word);
    const time = length * 60;
    setTimeLeft(time);
    setGameIsStarted(true);
  };

  return (
    <div id="setup-container">
      <h1>Welcome to Hangman!</h1>
      <h2>How many letters?</h2>
      <div id="setup-input">
        <input
          id="number-input"
          type="number"
          min={3}
          max={8}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <button
          id="number-submit"
          className="btn"
          type="submit"
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Setup;

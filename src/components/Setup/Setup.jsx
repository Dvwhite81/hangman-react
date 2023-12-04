import { useState } from 'react';
import './Setup.css';

function Setup({ setWord, setTimeLeft, setGameIsStarted }) {
  const [length, setLength] = useState(null);

  const handleClick = () => {
    let word;
    switch (length) {
      case 3:
        word = 'CAT';
        break;
      case 4:
        word = 'TREE';
        break;
      case 5:
        word = 'HOUSE';
        break;
      case 6:
        word = 'YELLOW';
        break;
      case 7:
        word = 'HANGMAN';
        break;
      case 8:
        word = 'AAAAAAAA';
        break;
      default:
        break;
    }
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

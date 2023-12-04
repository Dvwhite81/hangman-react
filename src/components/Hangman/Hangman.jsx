import Word from '../Word/Word';
import LetterButtons from '../LetterButtons/LetterButtons';
import './Hangman.css';
import Guesses from '../Guesses/Guesses';

function Hangman({
  correctWord,
  gameWord,
  rightGuesses,
  wrongGuesses,
  handleLetterClick,
}) {
  return (
    <div id="hangman-container">
      <Guesses
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
      />
      <Word correctWord={correctWord} gameWord={gameWord} />
      <LetterButtons handleLetterClick={handleLetterClick} />
    </div>
  );
}

export default Hangman;

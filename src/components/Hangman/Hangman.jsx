import Word from '../Word/Word';
import LetterButtons from '../LetterButtons/LetterButtons';
import Guesses from '../Guesses/Guesses';
import Canvas from '../Canvas/Canvas';
import './Hangman.css';

function Hangman({
  gameWord,
  rightGuesses,
  wrongGuesses,
  handleLetterClick,
}) {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  return (
    <div id="hangman-container">
      <Canvas wrongGuesses={wrongGuesses} />
      <Guesses
        alphabet={alphabet}
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
      />
      <div id="word-and-letters-container">
        <Word gameWord={gameWord} />
        <LetterButtons
          alphabet={alphabet}
          handleLetterClick={handleLetterClick}
        />
      </div>
    </div>
  );
}

export default Hangman;

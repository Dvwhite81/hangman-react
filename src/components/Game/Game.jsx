import Hangman from '../Hangman/Hangman';
import Timer from '../Timer/Timer';
import './Game.css';

function Game({
  gameIsOver,
  correctWord,
  gameWord,
  rightGuesses,
  wrongGuesses,
  handleLetterClick,
  timeLeft,
}) {
  console.log('Game gameWord:', gameWord);
  return (
    <div id="game-container">
      <Timer gameIsOver={gameIsOver} timeLeft={timeLeft} />
      <Hangman
        correctWord={correctWord}
        gameWord={gameWord}
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
        handleLetterClick={handleLetterClick}
      />
    </div>
  );
}

export default Game;

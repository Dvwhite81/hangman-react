import Hangman from '../Hangman/Hangman';
import Timer from '../Timer/Timer';
import './Game.css';

function Game({
  gameIsOver,
  gameWord,
  rightGuesses,
  wrongGuesses,
  handleLetterClick,
  timeLeft,
  isEasyMode,
}) {
  return (
    <div id="game-container">
      <Timer gameIsOver={gameIsOver} timeLeft={timeLeft} />
      <Hangman
        gameWord={gameWord}
        rightGuesses={rightGuesses}
        wrongGuesses={wrongGuesses}
        handleLetterClick={handleLetterClick}
        isEasyMode={isEasyMode}
      />
    </div>
  );
}

export default Game;

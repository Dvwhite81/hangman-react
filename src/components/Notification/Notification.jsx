import './Notification.css';

function Notification({ gameIsOver, wonGame, gameWord, resetGame }) {
  const display = gameIsOver ? 'flex' : 'none';
  const styles = { display: display };
  return (
    <div id="modal" style={styles}>
      <div id="modal-content">
        {!wonGame ? (
          <>
            <h2>You Lost!</h2>
            <h3>The word was {gameWord}</h3>
          </>
        ) : (
          <>
            <h2>You Won!</h2>
            <h3>The word was {gameWord}</h3>
          </>
        )}
        <h2>Play Again?</h2>
        <button
          id="modal-submit-btn"
          type="button"
          onClick={resetGame}
        >
          Sure!
        </button>
      </div>
    </div>
  );
}

export default Notification;

import './Notification.css';

function Notification({ gameIsOver, wonGame, gameWord }) {
  const display = gameIsOver ? 'flex' : 'none';
  const styles = { display: display };
  return (
    <div id="modal" style={styles}>
      <div id="modal-content">
        {!wonGame ? (
          <>
            <h3>You Lost!</h3>
            <p>The word was {gameWord}</p>
          </>
        ) : (
          <h3>You Won!</h3>
        )}
        <h3>Play Again?</h3>
        <button id="modal-submit-btn" type="button">
          Sure!
        </button>
      </div>
    </div>
  );
}

export default Notification;

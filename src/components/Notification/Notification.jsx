import Modal from '../Modal/Modal';

function Notification({
  gameIsOver,
  wonGame,
  correctWord,
  resetGame,
}) {
  const joined = correctWord.join('');
  const content = (
    <div id="modal-content">
      {!wonGame ? (
        <>
          <h2>You Lost!</h2>
          <h3>The word was {joined}</h3>
        </>
      ) : (
        <>
          <h2>You Won!</h2>
          <h3>The word was {joined}</h3>
        </>
      )}
      <h2>Play Again?</h2>
      <button id="modal-submit-btn" type="button" onClick={resetGame}>
        Sure!
      </button>
    </div>
  );
  return <Modal setOpen={gameIsOver} content={content} />;
}

export default Notification;

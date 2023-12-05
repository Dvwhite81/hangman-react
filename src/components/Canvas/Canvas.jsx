import './Canvas.css';

function Canvas({ wrongGuesses }) {
  const errors = wrongGuesses.length;
  const imgClass = `error-${errors}`;

  return (
    <div id="canvas">
      <div id="canvas-img" className={imgClass} />
    </div>
  );
}

export default Canvas;

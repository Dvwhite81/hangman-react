import './Canvas.css';

function Canvas({ isEasyMode, wrongGuesses }) {
  const errors = wrongGuesses.length;
  let imgClass;
  if (isEasyMode && errors > 7) {
    imgClass = `error-easy`;
  } else {
    imgClass = `error-${errors}`;
  }

  return (
    <div id="canvas">
      <div id="canvas-img" className={imgClass} />
    </div>
  );
}

export default Canvas;

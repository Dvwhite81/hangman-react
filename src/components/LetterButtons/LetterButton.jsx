function LetterButton({ letter, handleLetterClick }) {
  return (
    <button
      key={letter}
      id={`${letter}-button`}
      className="letter-button"
      type="button"
      onClick={() => handleLetterClick(letter)}
    >
      {letter}
    </button>
  );
}

export default LetterButton;

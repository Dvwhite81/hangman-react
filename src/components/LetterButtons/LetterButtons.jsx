import LetterButton from './LetterButton';
import './LetterButtons.css';

function LetterButtons({ alphabet, handleLetterClick }) {
  return (
    <div id="letter-buttons-container">
      {alphabet.map((letter) => (
        <LetterButton
          key={letter}
          letter={letter}
          handleLetterClick={handleLetterClick}
        />
      ))}
    </div>
  );
}

export default LetterButtons;

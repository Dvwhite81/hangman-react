import WordLetter from './WordLetter';
import './Word.css';

function Word({ gameWord }) {
  const letters = Array.from(gameWord.split(''));
  const wordLetters = [];
  for (let i = 0; i < letters.length; i++) {
    const id = `word-letter-${i}`;
    const letter = (
      <WordLetter key={id} id={id} letter={letters[i]} />
    );
    wordLetters.push(letter);
  }
  return <div id="word-container">{wordLetters}</div>;
}

export default Word;

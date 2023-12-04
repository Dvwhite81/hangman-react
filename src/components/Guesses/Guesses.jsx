import Guess from './Guess';
import './Guesses.css';

function Guesses({ alphabet, rightGuesses, wrongGuesses }) {
  const all = [...rightGuesses, ...wrongGuesses];
  const guesses = alphabet.map((letter) => {
    const type = all.includes(letter);
    return <Guess key={letter} letter={letter} type={type} />;
  });
  return <div id="guesses-container">{guesses}</div>;
}

export default Guesses;

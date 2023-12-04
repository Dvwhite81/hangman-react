function Guess({ letter, type }) {
  const styles = type ? { textDecoration: 'line-through' } : {};
  return (
    <div className="guesses-letter" style={styles}>
      {letter}
    </div>
  );
}

export default Guess;

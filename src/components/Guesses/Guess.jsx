function Guess({ letter, type }) {
  const styles = type
    ? {
        textDecorationLine: 'line-through',
        textDecorationThickness: '0.2rem',
        textDecorationColor: 'var(--lightest-color)',
      }
    : {};
  return (
    <div className="guesses-letter" style={styles}>
      {letter}
    </div>
  );
}

export default Guess;

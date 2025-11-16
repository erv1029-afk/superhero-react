const WinnerCard = ({ winner }) => (
  <div className="winner-card">
    <h2>🏆 {winner.name} wins!</h2>
    <img src={winner.image.url} alt={winner.name} />
  </div>
);
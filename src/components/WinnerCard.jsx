export default function WinnerCard({ hero }) {
  if (!hero) return null;

  return (
    <div
      className="winner-card"
      role="status"
      aria-live="polite"
      data-winner={hero.name}
    >
      <h2 className="winner-announcement">🏆 {hero.name} wins the fight!</h2>
      {hero.images?.md && (
        <img
          src={hero.images.md}
          alt={`Portrait of ${hero.name}`}
          className="winner-image"
        />
      )}
    </div>
  );
}
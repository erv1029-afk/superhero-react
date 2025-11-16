const BattleNarration = ({ description }) => (
  <p className="battle-description">
    {description || '🔥 The battle rages on...'}
  </p>
);

export default BattleNarration;
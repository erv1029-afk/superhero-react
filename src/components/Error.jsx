import React from 'react';

function Error({ message }) {
  if (!message) return null;

  const fallbackMessage = 'An unexpected error occurred. Please try again.';

  return (
    <div className="error-container" role="alert" aria-live="assertive">
      <h2>⚠️ Something went wrong</h2>
      <p>{message || fallbackMessage}</p>
    </div>
  );
}

export default Error;
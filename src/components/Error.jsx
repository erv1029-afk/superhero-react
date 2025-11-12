import React from 'react';

function Error({ message }) {
  if (!message) return null;

  return (
    <div className="error-container">
      <h2>⚠️ Something went wrong</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
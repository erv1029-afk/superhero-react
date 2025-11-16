import React from 'react';

function Loader() {
  return (
    <div className="loader-container" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p className="loading-text">Loading heroes...</p>
    </div>
  );
}

export default Loader;
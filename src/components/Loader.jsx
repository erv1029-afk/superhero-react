import React from 'react';


function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <p>Loading heroes...</p>
    </div>
  );
}

export default Loader;
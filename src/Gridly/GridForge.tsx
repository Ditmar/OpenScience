import React from 'react';
import './gridzone.scss';

function GridForge(): JSX.Element {
  return (
    <div className="container">
      <div className="auto-grid">
        {Array.from({ length: 12 }, (_, idx) => (
          <div className="grid-item col-1" key={`col-${String(idx + 1)}`}>
            {}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridForge;

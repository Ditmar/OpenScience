import React from 'react';
import './GridMobile.scss';

function GridMobile(): JSX.Element {
  return (
    <div className="container">
      <div className="auto-grid">
        {Array.from({ length: 4 }, (_, idx) => (
          <div className="grid-item" key={`col-${String(idx + 1)}`}>
            Col {String(idx + 1)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridMobile;

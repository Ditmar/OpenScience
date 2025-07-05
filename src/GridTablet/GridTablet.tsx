import React from 'react';
import './GridTablet.scss';

interface Props {
  children: React.ReactNode;
}

function GridTablet({ children }: Props) {
  return (
    <div className="container">
      <div className="auto-grid">{children}</div>
    </div>
  );
}

export default GridTablet;

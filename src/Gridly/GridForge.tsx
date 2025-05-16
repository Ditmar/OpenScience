import React from 'react';
import './gridzone.scss';

interface Props {
  children: React.ReactNode;
}

function GridForge({ children }: Props) {
  return (
    <div className="container">
      <div className="auto-grid">{children}</div>
    </div>
  );
}

export default GridForge;

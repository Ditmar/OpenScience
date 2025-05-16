import React from 'react';
import './GridMobile.scss';

interface Props {
  children: React.ReactNode;
}

function GridMobile({ children }: Props) {
  return (
    <div className="container">
      <div className="auto-grid">{children}</div>
    </div>
  );
}

export default GridMobile;



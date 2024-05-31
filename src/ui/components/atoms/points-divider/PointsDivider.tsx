import React from 'react';
import './styles.scss';
import type { DividerProps } from './types/IProps';

function PointsDivider(props: DividerProps) {
  const { color = 'primary', size = 'medium', variant = 'solid' } = props;
  return (
    <div className={`divider ${color} ${size} ${variant}`}>
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  );
}

export default PointsDivider;

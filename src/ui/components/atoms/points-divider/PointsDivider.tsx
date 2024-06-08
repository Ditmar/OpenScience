import React from 'react';
import './styles.scss';
import type { DividerProps } from './types/IProps';

function PointsDivider(props: DividerProps) {
  const { color = 'primary', size = 'small', variant = 'solid' } = props;

  return (
    <div className={`divider divider--${color} divider--${size} divider--${variant}`}>
      {variant === 'points' && (
        <>
          <span className="divider__dot" />
          <span className="divider__dot" />
          <span className="divider__dot" />
        </>
      )}
    </div>
  );
}

export default PointsDivider;

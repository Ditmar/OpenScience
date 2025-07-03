import React from 'react';
import './styles.scss';
import type { IProps } from './Props/IProps';

function DotsNavigation({ count, activeIndex, onDotClick, className = '' }: IProps) {
  return (
    <div
      className={`dots-navigation ${className}`}
      role="tablist"
      aria-label="Navegación por volúmenes"
    >
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={`dot-${String(idx)}`}
          className={`dot${idx === activeIndex ? ' active' : ''}`}
          aria-label={`Ir al volumen ${String(idx + 1)}`}
          tabIndex={0}
          onClick={() => {
            onDotClick(idx);
          }}
        />
      ))}
    </div>
  );
}

export default DotsNavigation;

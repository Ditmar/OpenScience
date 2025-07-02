import React from 'react';
import './styles.scss';
import type { IProps } from './Props/IProps';

const DotsNavigation: React.FC<IProps> = ({
  count,
  activeIndex,
  onDotClick,
  className = '',
}) => (
  <div className={`dots-navigation ${className}`} role="tablist" aria-label="Navegación por volúmenes">
    {Array.from({ length: count }).map((_, idx) => (
      <button
        key={idx}
        className={`dot${idx === activeIndex ? ' active' : ''}`}
        aria-label={`Ir al volumen ${idx + 1}`}
        aria-selected={idx === activeIndex}
        tabIndex={0}
        onClick={() => onDotClick(idx)}
      />
    ))}
  </div>
);

export default DotsNavigation;
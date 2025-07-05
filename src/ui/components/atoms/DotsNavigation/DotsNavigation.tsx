import React from 'react';
import { DotsWrapper, DotButton } from './DotsNavigation.styles';
import type { IProps } from './Props/IProps';

function DotsNavigation({ count, activeIndex, onDotClick, className = '' }: IProps) {
  return (
    <DotsWrapper className={className} role="tablist" aria-label="Navegación por volúmenes">
      {Array.from({ length: count }).map((_, idx) => (
        <DotButton
          // eslint-disable-next-line react/no-array-index-key
          key={`dot-${String(idx)}`}
          active={idx === activeIndex}
          aria-label={`Ir al volumen ${String(idx + 1)}`}
          tabIndex={0}
          onClick={() => {
            onDotClick(idx);
          }}
        />
      ))}
    </DotsWrapper>
  );
}

export default DotsNavigation;

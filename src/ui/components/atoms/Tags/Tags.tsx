import React, { useState } from 'react';
import './styles.scss';
import type { ITagsProps } from './types/IProps';

function Tags({ labels, variant = 'default' }: ITagsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className={`tags ${variant}`}>
      {labels.map((label, index) => (
        <li
          key={label}
          className={`tag ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => {
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

Tags.defaultProps = {
  variant: 'default',
};

export default Tags;

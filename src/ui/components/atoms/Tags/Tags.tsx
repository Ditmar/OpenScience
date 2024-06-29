import React, { useState } from 'react';
import './Tags.scss';
import type { ITagsProps } from './types/IProps';

function Tags({ labels, variant = 'default', to }: ITagsProps) {
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
          {to ? <a href={to}>{label}</a> : label}
        </li>
      ))}
    </ul>
  );
}

Tags.defaultProps = {
  variant: 'default',
};

export default Tags;

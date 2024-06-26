import { useState } from 'react';
import styles from './Tags.module.scss';
import type { ITagsProps } from './types/IProps';

function Tags({ labels, variant = 'default', to }: ITagsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colorFont = styles[variant as keyof typeof styles] || styles.default;

  return (
    <ul className={`${styles.tags} ${colorFont}`}>
      {labels.map((label, index) => (
        <li
          key={label}
          className={`${styles.tag} ${hoveredIndex === index ? styles.hovered : ''}`}
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

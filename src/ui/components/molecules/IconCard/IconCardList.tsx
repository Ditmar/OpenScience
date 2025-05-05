// src/ui/components/molecules/IconCard/IconCardList.tsx
import React from 'react';
import styles from './IconCardList.module.css';
import { IconCardListProps } from './IconCardList.types';

const IconCardList: React.FC<IconCardListProps> = ({ items, onSelect, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {items.map(item => (
        <label
          key={item.id}
          className={`${styles.card} ${item.selected ? styles.cardSelected : ''}`}
          aria-checked={item.selected}
          role="checkbox"
        >
          <input
            type="checkbox"
            checked={item.selected}
            onChange={(e) => onSelect?.(item.id, e.target.checked)}
            className={styles.checkbox}
            aria-label={item.title}
          />
          {item.icon && <div className={styles.icon}>{item.icon}</div>}
          <div className={styles.text}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
            {item.description && <p className={styles.description}>{item.description}</p>}
          </div>
        </label>
      ))}
    </div>
  );
};

export { IconCardList };


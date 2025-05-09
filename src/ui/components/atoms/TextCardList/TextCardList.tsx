import React from 'react';
import styles from './TextCardList.module.scss';
import type { TextCardListContainerProps } from './types/IProps';

function TextCardList({ items, className }: TextCardListContainerProps) {
  return (
    <div className={`${styles.cardListContainer} ${className ?? ''}`}>
      {items.map((item) => (
        <div
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => item.onSelect?.(!item.selected)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              item.onSelect?.(!item.selected);
            }
          }}
          className={`${styles.card} 
                      ${item.selected ? styles.selected : ''} 
                      ${styles[`variant-${item.variant ?? 'default'}`]} 
                      ${item.className ?? ''}`}
        >
          {}
          <input type="checkbox" checked={item.selected} readOnly className={styles.checkbox} />

          <div className={styles.cardContent}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.description && <p className={styles.description}>{item.description}</p>}
            {item.categoryTag && (
              <span className={`${styles.tag} ${styles[`tag-${item.variant ?? 'default'}`]}`}>
                {item.categoryTag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextCardList;

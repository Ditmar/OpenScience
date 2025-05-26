import React from 'react';
import type { TextCardPropsList } from './types/IProps';
import styles from './TextCardList.module.scss';

function TextCardList({
  title,
  categoryTag,
  description,
  selected = false,
  onSelect,
  variant = 'default',
  className = '',
  badge,
}: TextCardPropsList) {
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    onSelect?.(event.target.checked);
  }

  const cardClasses = [
    styles['text-card'],
    styles[`text-card--${variant}`],
    selected ? styles['text-card--selected'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses}>
      <div className={styles['text-card__header']}>
        <div className={styles['text-card__checkbox-wrapper']}>
          <input type="checkbox" checked={selected} onChange={handleCheckboxChange} />
        </div>

        {badge && (
          <div className={styles['text-card__badge']}>
            <div className={styles['text-card__avatar-wrapper']}>
              <img
                className={styles['text-card__avatar']}
                src="/src/assets/icons/facebook.svg"
                alt="Avatar"
              />
            </div>
            {badge.text && <span className={styles['text-card__text']}>{badge.text}</span>}
            {badge.trailingText && (
              <span className={styles['text-card__badge-trailing']}>{badge.trailingText}</span>
            )}
          </div>
        )}
      </div>

      <div className={styles['text-card__content']}>
        <div className={styles['text-card__title-tag']}>
          <h3 className={styles['text-card__title']}>{title}</h3>
          {categoryTag && <span className={styles['text-card__tag']}>{categoryTag}</span>}
        </div>
        {description && <p className={styles['text-card__description-text']}>{description}</p>}
      </div>
    </div>
  );
}

export default TextCardList;

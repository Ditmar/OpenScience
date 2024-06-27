import React from 'react';
import styles from './LabelFeaturedArticles.module.scss';
import type { IProps } from './types/IProps';

function LabelFeaturedArticles({ text = 'artículos destacados', ColorVariant = 'main' }: IProps) {
  let labelColorClass = '';
  let backgroundColorClass = '';

  if (ColorVariant === 'main') {
    labelColorClass = styles['label-featured-articles--main'];
    backgroundColorClass = styles['label-featured-articles--mainBg'];
  } else if (ColorVariant === 'primary') {
    labelColorClass = styles['label-featured-articles--primary'];
  } else {
    labelColorClass = styles['label-featured-articles--secondary'];
  }

  return (
    <div
      className={`${styles['label-featured-articles']} ${labelColorClass} ${backgroundColorClass}`}
    >
      <span className={styles['label-featured-articles__text']}>{text}</span>
    </div>
  );
}

export default LabelFeaturedArticles;

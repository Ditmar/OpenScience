import React from 'react';
import styles from './ArticleDescription.module.scss';
import type { IProps } from './types/IProps';

function ArticleDescription({ article, variant }: IProps) {
  const textStyleMap: Record<string, string> = {
    bold: styles['bold-text'],
    italic: styles['italic-text'],
    underline: styles['underline-text'],
    highlight: styles['highlight-text'],
    default: styles['default-text'],
  };

  const textStyle = variant && textStyleMap[variant] ? textStyleMap[variant] : textStyleMap.default;

  return (
    <div className={styles['article-description']}>
      <p className={`${styles['article-description__text']} ${textStyle}`}>{article}</p>
    </div>
  );
}

export default ArticleDescription;

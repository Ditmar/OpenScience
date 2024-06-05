import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function ArticleDescription({ article, variant }: IProps) {
  const getTextStyle = () => {
    if (variant === 'bold') {
      return 'bold-text';
    }
    if (variant === 'italic') {
      return 'italic-text';
    }
    return '';
  };

  const textStyle = getTextStyle();
  return (
    <div className="article-description">
      <p className={`article-text ${textStyle}`}>{article}</p>
    </div>
  );
}

export default ArticleDescription;

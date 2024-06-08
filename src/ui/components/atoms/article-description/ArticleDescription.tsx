import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function ArticleDescription({ article, variant }: IProps) {

  const textStyleMap = {
    bold: 'bold-text',
    italic: 'italic-text',
    underline: 'underline-text',
    highlight: 'highlight-text',
  };


   let textStyle = 'default-class'; 
  if (variant!== undefined && variant!== 'default') {
    textStyle = textStyleMap[variant];
  }

  return (
    <div className="article-description">
      <p className={`article-description__text ${textStyle}`}>{article}</p>
      
    </div>
  );
}

export default ArticleDescription;



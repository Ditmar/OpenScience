import React from 'react';
import type IProps from './types/IProps';
import './Article.scss';

function Article({ children }: IProps) {
  return <div className="article">{children}</div>;
}

export default Article;

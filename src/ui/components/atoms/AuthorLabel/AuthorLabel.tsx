import './styles.scss';
import React from 'react';
import type { IProps } from './types/IProps';

function AuthorLabel({ author }: IProps) {
  return (
    <p className="author-label"> {}
       {author} {}
    </p>
  );
}
export default AuthorLabel;

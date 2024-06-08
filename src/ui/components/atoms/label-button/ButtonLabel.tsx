import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonLabel({ children, variant = 'primary', icon }: IProps) {
  return (
    <div className="container">
      <span className="icon" dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }} />
      <span className={`label label--${variant}`}>{children}</span>
    </div>
  );
}

export default ButtonLabel;

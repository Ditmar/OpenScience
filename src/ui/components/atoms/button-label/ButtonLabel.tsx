import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonLabel({ children, variant = 'primary', icon }: IProps) {
  return (
    <div>
      <span
        className={`icon icon--${variant}`}
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="label">{children}</span>
    </div>
  );
}

export default ButtonLabel;

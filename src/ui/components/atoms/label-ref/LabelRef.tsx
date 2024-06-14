import React from 'react';
import './LabelRef.scss';
import type { IProps } from './types/IProps';

function LabelRef(props: IProps) {
  const { children, variant = 'default' } = props;
  return (
    <div className={`label-ref label-ref--${variant}`}>
      <p className={`label-ref__icon label-ref__icon--${variant}`}>R</p>
      <p className="label-ref__label">{children}</p>
    </div>
  );
}

export default LabelRef;

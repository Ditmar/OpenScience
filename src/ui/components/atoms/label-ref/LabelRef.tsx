import React from 'react';
import './styles.scss';

interface IProps {
  children: React.ReactNode;
  variant: 'default' | 'secondary';
}

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

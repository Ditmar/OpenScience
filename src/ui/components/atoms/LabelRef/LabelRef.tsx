import React from 'react';
import './styles.scss';

interface IProps {
  children: React.ReactNode;
  variant: 'default' | 'secondary';
}

function LabelRef(props: IProps) {
  const { children, variant = 'default' } = props;
  return (
    <div className={`label-ref ${variant}`}>
      <p className="icon">R</p>
      <p className="label">{children}</p>
    </div>
  );
}

export default LabelRef;

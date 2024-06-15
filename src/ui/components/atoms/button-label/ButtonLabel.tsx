import React from 'react';
import './ButtonLabel.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function ButtonLabel({ children, variant = 'primary', icon }: IProps) {
  const colorFont = `icon--${variant as string}`;
  return (
    <div className="label-icon__container">
      {icon && <Icon data-testid="logo_icon" src={icon} className={`icon icon-- ${colorFont}`}/>}
      <span className="label">{children}</span>
    </div>
  );
}

export default ButtonLabel;

import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function ButtonLabel({ children, variant = 'primary', icon }: IProps) {
  const colorFont = `label-icon__icon--${variant as string}`;
  return (
    <div className="label-icon__container">
      {icon && (
        <Icon data-testid="logo_icon" src={icon} className={`label-icon__icon ${colorFont}`} />
      )}
      <span className="label-icon__label">{children}</span>
    </div>
  );
}

export default ButtonLabel;

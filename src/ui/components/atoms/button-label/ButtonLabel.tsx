import React from 'react';
import styles from './ButtonLabel.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function ButtonLabel({ children, variant = 'primary', icon }: IProps) {
  const colorFont = styles[`label-icon__icon--${variant}`];
  return (
    <div className={styles['label-icon__container']}>
      {icon && (
        <Icon data-testid="logo_icon" src={icon} className={`${styles['label-icon__icon']} ${colorFont}`} />
      )}
      <span className={styles['label-icon__label']}>{children}</span>
    </div>
  );
}

export default ButtonLabel;

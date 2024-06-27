import React from 'react';
import styles from './LogoFooter.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function LogoFooter({ icon, color }: IProps) {
  const colorFont = color === 'secondary' ? styles['logo--secondary'] : '';

  return (
    <div className={`${styles.logo} ${colorFont}`}>
      {icon && <Icon data-testid="logo_icon" src={icon} className={styles['logo-icon']} />}
    </div>
  );
}

export default LogoFooter;

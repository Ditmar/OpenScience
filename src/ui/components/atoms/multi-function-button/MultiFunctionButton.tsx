import React from 'react';
import styles from './MultiFunctionButton.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function MultiFunctionButton(props: IProps) {
  const { icon, onClick, color = 'primary' } = props;
  const colorFont = `${styles['variable-button']}--${color as string}`;
  return (
    <button
      className={`${styles['variable-button']} ${colorFont}`}
      aria-label="Abrir"
      onClick={onClick}
    >
      {icon && <Icon data-testid="button-icon" src={icon} className={styles['button-icon']} />}
    </button>
  );
}

export default MultiFunctionButton;

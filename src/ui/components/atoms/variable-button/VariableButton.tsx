import React from 'react';
import styles from './variableButton.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function VariableButton(props: IProps) {
  const { icon, onClick } = props;
  return (
    <button className={styles['variable-button']} aria-label="Abrir" onClick={onClick}>
      {icon && <Icon data-testid="button-icon" src={icon} className={styles['button-icon']} />}
    </button>
  );
}

export default VariableButton;

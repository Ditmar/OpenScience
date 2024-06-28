import React from 'react';
import styles from './LabelRef.module.scss';
import type { IProps } from './types/IProps';

function LabelRef(props: IProps) {
  const { children, variant = 'default' } = props;
  return (
    <div className={`${styles['label-ref']} ${styles[`label-ref--${variant}`]}`}>
      <p className={`${styles['label-ref__icon']} ${styles[`label-ref__icon--${variant}`]}`}>R</p>
      <p className={styles['label-ref__label']}>{children}</p>
    </div>
  );
}

export default LabelRef;

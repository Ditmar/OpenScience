import React from 'react';
import styles from './PointsDivider.module.scss';
import type { DividerProps } from './types/IProps';

function PointsDivider(props: DividerProps) {
  const { color = 'primary', size = 'small', variant = 'solid' } = props;

  return (
    <div
      className={`${styles.divider} ${styles[`divider--${color}`]} ${styles[`divider--${size}`]} ${
        styles[`divider--${variant}`]
      }`}
    >
      {variant === 'points' && (
        <>
          <span className={styles.divider__dot} />
          <span className={styles.divider__dot} />
          <span className={styles.divider__dot} />
        </>
      )}
    </div>
  );
}

export default PointsDivider;

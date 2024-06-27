import React from 'react';
import styles from './Divider.module.scss';
import type { IProps } from './types/IProps';

function Divider(props: IProps) {
  const { variant } = props;
  return <hr className={`${styles.divider} ${styles[`divider--${variant}`]}`} />;
}

export default Divider;

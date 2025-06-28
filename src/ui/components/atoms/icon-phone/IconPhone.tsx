import React from 'react';
import styles from './IconPhone.module.scss';
import type { PhoneNumberProps } from './types/IProps';
import phoneIconSrc from '../../../../assets/icons/fi-rr-phone-flip.svg';

const src = phoneIconSrc as unknown as string;

export default function PhoneNumber({
  text = 'Phone Number',
  fontSizeClass = 'font-size-16',
  colorClass = 'color-dark',
  fontWeightClass = 'font-weight-400',
}: PhoneNumberProps) {
  return (
    <div className={styles.container}>
      <img data-testid="phone-icon" src={src} alt="phone icon" className={styles.icon} />
      <span
        className={`${styles.text} ${styles[fontSizeClass]} ${styles[colorClass]} ${styles[fontWeightClass]}`}
      >
        {text}
      </span>
    </div>
  );
}

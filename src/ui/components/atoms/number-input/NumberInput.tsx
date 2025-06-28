import React from 'react';
import styles from './NumberInput.module.scss';
import type { PhoneNumberInputProps } from './types/IProps';
import PhoneIconUrl from '../../../../assets/icons/fi-rr-phone-flip.svg';

function PhoneNumberInput({
  size = 'medium',
  borderRadius = 'straight',
  state = 'default',
  value = '',
  onChange,
}: PhoneNumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');
    onChange?.(numbersOnly);
  };
  return (
    <div className={`${styles.container} ${styles[size]} ${styles[borderRadius]} ${styles[state]}`}>
      <img src={PhoneIconUrl as unknown as string} alt="Phone Icon" className={styles.icon} />
      <input
        className={`${styles.input} ${styles[`input-${size}`]} ${value ? styles.filled : ''}`}
        type="text"
        placeholder="Phone Number"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default PhoneNumberInput;

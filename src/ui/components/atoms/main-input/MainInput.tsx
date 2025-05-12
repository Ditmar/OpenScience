import React from 'react';
import styles from './MainInput.module.scss';
import type { IProps } from './types/IProps';

function MainInput(props: IProps) {
  const { label, placeholder, value, onChange, leftIcon, rightIcon, hint, error, disabled } = props;

  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const containerClass = [
    styles['input-container'],
    error ? styles.error : '',
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <div className={styles['main-input-wrapper']}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <div className={containerClass}>
        {leftIcon && <div className={styles['icon-left']}>{leftIcon}</div>}
        <input
          id={inputId}
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-describedby={hint ?? error ? `${inputId}-hint` : undefined}
          aria-invalid={!!error}
        />
        {rightIcon && <div className={styles['icon-right']}>{rightIcon}</div>}
      </div>
      {(hint ?? error) && (
        <p id={`${inputId}-hint`} className={error ? styles['error-message'] : styles.hint}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

export default MainInput;

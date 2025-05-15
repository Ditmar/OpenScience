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
        {leftIcon && <span className={styles['icon-left']}>{leftIcon}</span>}
        {label}
        {hint && !error && (
          <span className={`${styles.tooltip}`} data-tooltip={hint}>
            ℹ️
          </span>
        )}
      </label>
      <div className={containerClass}>
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
        {rightIcon && <span className={`${styles['icon-right']} ${!disabled ? 'clickable' : ''}`}>{rightIcon}</span>}
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

import React, { useState, forwardRef } from 'react';
import type { ReactNode, InputHTMLAttributes } from 'react';
import styles from './TextField.module.scss';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  /** Text label for the input field */
  label?: string;
  /** Current value of the input */
  value: string;
  /** Callback fired when input value changes */
  onChange: (value: string) => void;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Whether the input is in error state */
  error?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Icon displayed on the left side of the input */
  leftIcon?: ReactNode;
  /** Icon displayed on the right side of the input */
  rightIcon?: ReactNode;
  /** Size variant of the input */
  size?: 'small' | 'medium' | 'large';
  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Additional class names */
  className?: string;
  /** Unique identifier for the input */
  id?: string;
}

/**
 * Text Field component for capturing user input in forms
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      value,
      onChange,
      helperText,
      error = false,
      disabled = false,
      leftIcon,
      rightIcon,
      size = 'medium',
      type = 'text',
      className = '',
      id,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    // Generate a unique ID if none is provided
    const uniqueId = id ?? `text-field-${Math.random().toString(36).substring(2, 9)}`;

    // Generate class names for the component
    const textFieldClasses = [
      styles['text-field'],
      styles[`text-field--${size}`],
      isFocused && styles['text-field--focused'],
      error && styles['text-field--error'],
      disabled && styles['text-field--disabled'],
      leftIcon && styles['text-field--with-left-icon'],
      rightIcon && styles['text-field--with-right-icon'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <div className={textFieldClasses}>
        {label && (
          <label className={styles['text-field__label']} htmlFor={uniqueId}>
            {label}
          </label>
        )}

        <div className={styles['text-field__input-container']}>
          {leftIcon && (
            <div className={`${styles['text-field__icon']} ${styles['text-field__icon--left']}`}>
              {leftIcon}
            </div>
          )}

          <input
            id={uniqueId}
            ref={ref}
            className={styles['text-field__input']}
            type={type}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            aria-invalid={error}
            aria-describedby={helperText ? `${uniqueId}-helper-text` : undefined}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />

          {rightIcon && (
            <div className={`${styles['text-field__icon']} ${styles['text-field__icon--right']}`}>
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <div
            id={`${uniqueId}-helper-text`}
            className={`${styles['text-field__helper-text']} ${
              error ? styles['text-field__helper-text--error'] : ''
            }`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

// Display name for React DevTools
TextField.displayName = 'TextField';

export default TextField;

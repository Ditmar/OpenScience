import React, { useState } from 'react';
import type { ITextFieldProps } from './types/IProps';
import './text-field.scss';

function TextField({
  label,
  value,
  onChange,
  placeholder = '',
  error = false,
  helperText,
  disabled = false,
  leftIcon,
  rightIcon,
  size = 'medium',
  className = '',
  type = 'text',
  name = '',
  required = false,
  autoComplete,
}: ITextFieldProps) {
  const [, setIsFocused] = useState(false); // Eliminamos isFocused ya que no se utiliza

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClasses = [
    'text-field__input',
    `text-field__input--${size}`,
    error && 'text-field__input--error',
    disabled && 'text-field__input--disabled',
    leftIcon && 'text-field__input--with-left-icon',
    rightIcon && 'text-field__input--with-right-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [
    'text-field__label',
    error && 'text-field__label--error',
    disabled && 'text-field__label--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const helperTextClasses = [
    'text-field__helper-text',
    error && 'text-field__helper-text--error',
    disabled && 'text-field__helper-text--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const leftIconClasses = [
    'text-field__icon',
    'text-field__icon--left',
    error && 'text-field__icon--error',
    disabled && 'text-field__icon--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const rightIconClasses = [
    'text-field__icon',
    'text-field__icon--right',
    error && 'text-field__icon--error',
    disabled && 'text-field__icon--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="text-field">
      {label && (
        <label className={labelClasses} htmlFor={name}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="text-field__container">
        {leftIcon && <span className={leftIconClasses}>{leftIcon}</span>}
        <input
          id={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClasses}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={error}
          aria-describedby={helperText && name ? `${name}-helper-text` : undefined}
        />
        {rightIcon && <span className={rightIconClasses}>{rightIcon}</span>}
      </div>
      {helperText && name && (
        <p id={`${name}-helper-text`} className={helperTextClasses}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default TextField;

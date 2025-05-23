import React, { useState } from 'react';
import type { ITextFieldProps } from './types/IProps';
import './text-field.scss';

const TextField: React.FC<ITextFieldProps> = ({
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
  name,
  required = false,
  autoComplete,
}) => {
  const [isFocused, setIsFocused] = useState(false);

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
    error ? 'text-field__input--error' : '',
    disabled ? 'text-field__input--disabled' : '',
    leftIcon ? 'text-field__input--with-left-icon' : '',
    rightIcon ? 'text-field__input--with-right-icon' : '',
    className,
  ].join(' ');

  const labelClasses = [
    'text-field__label',
    error ? 'text-field__label--error' : '',
    disabled ? 'text-field__label--disabled' : '',
  ].join(' ');

  const helperTextClasses = [
    'text-field__helper-text',
    error ? 'text-field__helper-text--error' : '',
    disabled ? 'text-field__helper-text--disabled' : '',
  ].join(' ');

  const leftIconClasses = [
    'text-field__icon',
    'text-field__icon--left',
    error ? 'text-field__icon--error' : '',
    disabled ? 'text-field__icon--disabled' : '',
  ].join(' ');

  const rightIconClasses = [
    'text-field__icon',
    'text-field__icon--right',
    error ? 'text-field__icon--error' : '',
    disabled ? 'text-field__icon--disabled' : '',
  ].join(' ');

  return (
    <div className="text-field">
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="text-field__container">
        {leftIcon && <span className={leftIconClasses}>{leftIcon}</span>}
        <input
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
          aria-describedby={helperText ? `${name}-helper-text` : undefined}
        />
        {rightIcon && <span className={rightIconClasses}>{rightIcon}</span>}
      </div>
      {helperText && (
        <p id={`${name}-helper-text`} className={helperTextClasses}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;

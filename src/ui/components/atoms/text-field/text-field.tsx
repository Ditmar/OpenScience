import React, { useState } from 'react';
import classNames from 'classnames';
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
  const [, setIsFocused] = useState(false); // isFocused no se usa

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClasses = classNames(
    'text-field__input',
    `text-field__input--${size}`,
    {
      'text-field__input--error': error,
      'text-field__input--disabled': disabled,
      'text-field__input--with-left-icon': leftIcon,
      'text-field__input--with-right-icon': rightIcon,
    },
    className
  );

  const labelClasses = classNames('text-field__label', {
    'text-field__label--error': error,
    'text-field__label--disabled': disabled,
  });

  const helperTextClasses = classNames('text-field__helper-text', {
    'text-field__helper-text--error': error,
    'text-field__helper-text--disabled': disabled,
  });

  const leftIconClasses = classNames('text-field__icon', 'text-field__icon--left', {
    'text-field__icon--error': error,
    'text-field__icon--disabled': disabled,
  });

  const rightIconClasses = classNames('text-field__icon', 'text-field__icon--right', {
    'text-field__icon--error': error,
    'text-field__icon--disabled': disabled,
  });

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

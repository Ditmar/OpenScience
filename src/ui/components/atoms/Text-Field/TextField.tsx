import React, { forwardRef } from 'react';
import './TextField.scss';
import type { TextFieldProps } from './types/TextFieldProps';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      leftIcon,
      rightIcon,
      hint,
      error,
      disabled,
      className = '',
    },
    ref,
  ) => {
    const inputId = React.useId();
    const hintId = React.useId();

    return (
      <div className={`text-field ${className}`}>
        {label && (
          <label htmlFor={inputId} className="text-field__label">
            {label}
          </label>
        )}
        <div
          className={`text-field__container ${disabled ? 'disabled' : ''} ${error ? 'error' : ''}`}
        >
          {leftIcon && (
            <div className="text-field__icon left" data-testid="left-icon">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className="text-field__field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            aria-describedby={hintId}
            aria-invalid={!!error}
          />

          {rightIcon && (
            <div className="text-field__icon right" data-testid="right-icon">
              {rightIcon}
            </div>
          )}
        </div>

        {(hint ?? error) && (
          <p id={hintId} className={`text-field__message ${error ? 'error' : ''}`}>
            {error ?? hint}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

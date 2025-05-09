import React, { forwardRef } from 'react';
import './DefaultInput.scss';
import type { DefaultInputProps } from './types/DefaultInputProps';

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
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
      <div className={`default-input ${className}`}>
        {label && (
          <label htmlFor={inputId} className="default-input__label">
            {label}
          </label>
        )}
        <div
          className={`default-input__container ${disabled ? 'disabled' : ''} ${
            error ? 'error' : ''
          }`}
        >
          {leftIcon && (
            <div className="default-input__icon left" data-testid="left-icon">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className="default-input__field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            aria-describedby={hintId}
            aria-invalid={!!error}
          />

          {rightIcon && (
            <div className="default-input__icon right" data-testid="right-icon">
              {rightIcon}
            </div>
          )}
        </div>

        {(hint ?? error) && (
          <p id={hintId} className={`default-input__message ${error ? 'error' : ''}`}>
            {error ?? hint}
          </p>
        )}
      </div>
    );
  },
);

DefaultInput.displayName = 'DefaultInput';

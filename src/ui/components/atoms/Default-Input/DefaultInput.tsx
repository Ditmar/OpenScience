import React, { forwardRef, useState, useEffect } from 'react';
import './DefaultInput.scss';
import type { DefaultInputProps } from './types/DefaultInputProps';

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  (
    {
      value,
      disabled,
      error,
      id,
      hint,
      className,
      onChange,
      label,
      type = 'text',
      placeholder,
      required,
      readOnly,
      autoComplete,
      name,
    },
    ref,
  ) => {
    const [isFilled, setIsFilled] = useState(!!value);

    useEffect(() => {
      setIsFilled(!!value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const hasValue = e.target.value.length > 0;
      setIsFilled(hasValue);
      onChange?.(e);
    };

    const messageId = id ? `${id}-message` : undefined;

    return (
      <div className={`default-input ${className ?? ''}`}>
        {label && (
          <label htmlFor={id} className="default-input__label">
            {label}
          </label>
        )}

        <div
          className={`
          default-input__container
          ${isFilled ? 'filled' : ''}
          ${error ? 'error' : ''}
          ${disabled ? 'disabled' : ''}
        `}
        >
          <input
            ref={ref}
            id={id}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            autoComplete={autoComplete}
            name={name}
            onChange={handleChange}
            className="default-input__field"
            aria-invalid={!!error}
            aria-describedby={messageId}
          />
        </div>

        {(hint ?? error) && (
          <p id={messageId} className={`default-input__message ${error ? 'error' : ''}`}>
            {error ?? hint}
          </p>
        )}
      </div>
    );
  },
);

DefaultInput.displayName = 'DefaultInput';

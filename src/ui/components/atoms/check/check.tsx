import React from 'react';
import './check.scss';
import Icon from './Icon';
import type { CheckboxProps } from './types/IProps';

function Check({
  checked = false,
  onChange,
  disabled = false,
  variant = 'default',
  shape = 'square',
  className = '',
}: CheckboxProps): JSX.Element {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === ' ' || e.key === 'Enter') && !disabled) {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div
      className={`check ${className} ${disabled ? 'disabled' : ''} check--${variant} check--${shape}`}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      data-testid="checkbox"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        disabled={disabled}
        className="check__input"
        tabIndex={-1}
        aria-hidden="true"
      />
      <span className={`check__box check__box--${variant} check__box--${shape}`}>
        {checked && (
          <Icon
            name="check"
            className={`check__mark check__mark--${variant} check__mark--${shape}`}
            data-testid="checkmark"
          />
        )}
      </span>
    </div>
  );
}

export default Check;

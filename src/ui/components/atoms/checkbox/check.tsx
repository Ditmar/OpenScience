import React from 'react';
import './check.scss';

type CheckboxVariant = 'default' | 'success' | 'info' | 'warning' | 'danger';
type CheckboxShape = 'circle' | 'square';

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: CheckboxVariant;
  shape?: CheckboxShape;
  className?: string;
}

function Check({
  checked = false,
  onChange,
  disabled = false,
  variant = 'default',
  shape = 'square',
  className = '',
}: CheckboxProps): JSX.Element {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <label className={`check ${className} ${disabled ? 'disabled' : ''} check--${shape}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="check__input"
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className={`check__box check__box--${variant} check__box--${shape}`}>
        {checked && (
          <svg
            className={`check__mark check__mark--${shape}`}
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );
}
export default Check;
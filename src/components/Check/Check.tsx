import React from 'react';
import styles from './Check.module.scss';

type Variant = 'default' | 'success' | 'info' | 'warning' | 'danger';

export interface CheckProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: Variant;
}

function classNames(...args: (string | false | null | undefined)[]): string {
  return args.filter(Boolean).join(' ');
}

export function Check({
  checked,
  onChange,
  disabled = false,
  variant = 'default',
}: CheckProps): JSX.Element {
  const handleClick = (): void => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (!disabled && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={classNames(
        styles.check,
        styles[variant],
        checked && styles.checked,
        disabled && styles.disabled,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {checked && (
        <svg
          className={styles.icon}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

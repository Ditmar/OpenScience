import React from 'react';
import styles from './Check.module.scss';
import type { CheckProps } from './Check.props';

function classNames(...args: (string | false | null | undefined)[]): string {
  return args.filter(Boolean).join(' ');
}

export function Check({
  checked,
  onChange,
  disabled = false,
  variant = 'default',
  rounded = true,
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
        rounded && styles.rounded,
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

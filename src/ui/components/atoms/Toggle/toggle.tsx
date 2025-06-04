import React, { type KeyboardEvent } from 'react';
import styles from './toggle.module.scss';
import type { IProps } from './types/IProps';

function Toggle({
  checked,
  onChange,
  disabled = false,
  variant = 'default',
  size = 'medium',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: IProps) {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  const toggleClasses = [
    styles.toggle,
    styles[`toggle--${variant}`],
    styles[`toggle--${size}`],
    checked ? styles['toggle--checked'] : '',
    disabled ? styles['toggle--disabled'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={toggleClasses}
      role="switch"
      aria-checked={!!checked}
      aria-disabled={!!disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-testid="toggle"
    >
      <div className={styles.toggle__slider} data-testid="toggle-slider">
        <div className={styles.toggle__thumb} data-testid="toggle-thumb" />
      </div>
    </div>
  );
}

export default Toggle;

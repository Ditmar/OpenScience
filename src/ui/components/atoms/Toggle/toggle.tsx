import React, { useRef } from 'react';
import styles from './toggle.module.scss';
import type { IToggleProps } from './types/IToggleProps';

function Toggle({
  checked = false,
  onChange,
  disabled = false,
  variant = 'default',
  size = 'medium',
  className = '',
  'data-testid': testId = 'toggle',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
}: IToggleProps): JSX.Element {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const toggleId = id ?? `toggle-${Math.random().toString(36).substr(2, 9)}`;

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
      toggleRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ([' ', 'Enter'].includes(e.key)) {
      e.preventDefault();
      handleToggle();
    }
  };

  const toggleClasses = [
    styles.toggle,
    styles[`toggle--${variant}`],
    styles[`toggle--${size}`],
    checked ? styles['toggle--checked'] : '',
    disabled ? styles['toggle--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const accessibleLabel = ariaLabel ?? (checked ? 'Activado' : 'Desactivado');

  return (
    <button
      ref={toggleRef}
      id={toggleId}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={accessibleLabel}
      aria-labelledby={ariaLabelledby}
      className={toggleClasses}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      data-testid={testId}
    >
      <span className={styles.toggle__track}>
        <span className={styles.toggle__thumb} />
      </span>
    </button>
  );
}

export default Toggle;

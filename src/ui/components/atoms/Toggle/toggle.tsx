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
  style,
  'data-testid': testId = 'toggle',
}: IToggleProps): JSX.Element {
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    onChange(!checked);
    toggleRef.current?.focus();
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

  return (
    <button
      ref={toggleRef}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={checked ? 'Activado' : 'Desactivado'}
      className={toggleClasses}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      data-testid={testId}
      style={style}
    >
      <span className={styles.toggle__track}>
        <span className={styles.toggle__thumb} />
      </span>
    </button>
  );
}

export default Toggle;

import React from 'react';
import styles from './Checkbox.module.scss';
import type { IProps } from './types/Iprops';

const Checkbox: React.FC<IProps> = ({
  checked,
  onChange,
  disabled = false,
  variant = 'default',
  shape = 'square',
}) => {
  const handleToggle = () => {
    if (!disabled) onChange(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      handleToggle();
    }
  };

  const classNames = [
    styles.checkbox,
    styles[variant],
    styles[shape],
    checked ? styles.checked : '',
    disabled ? styles.disabled : '',
  ].join(' ').trim();

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={classNames}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      {checked && <span className={styles.checkmark}>✓</span>}
    </div>
  );
};

export default Checkbox;


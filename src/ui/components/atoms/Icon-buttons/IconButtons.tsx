import React from 'react';
import styles from './IconButton.module.scss';

export interface IconButtonProps {
  icon: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  shape?: 'square' | 'rounded' | 'circle';
  color?: 'neutral' | 'brand' | 'feedback';
  ariaLabel: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  shape = 'rounded',
  color = 'neutral',
  ariaLabel,
  disabled = false,
}) => {
  const classNames = `${styles.iconButton} ${styles[size]} ${styles[shape]} ${styles[color]} ${disabled ? styles.disabled : ''}`;

  return (
    <button
      className={classNames}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <img src={icon} alt="" />
    </button>
  );
};

export default IconButton;

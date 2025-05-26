import React from 'react';
import type { IIconButtonProps } from './types/Iprops';
import styles from './IconButtons.module.scss';

function IconButton({
  icon,
  ariaLabel,
  size = 'md',
  shape = 'square',
  color = 'neutral',
  className,
  disabled = false,
  type = 'button',
  onClick,
}: IIconButtonProps): JSX.Element {
  const buttonClasses = [
    styles['icon-button'],
    styles[size],
    styles[shape],
    styles[color],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default IconButton;

import React from 'react';
import './number-button.scss';

type Variant = 'filled' | 'outline' | 'ghost';

interface NumberButtonProps {
  number: number;
  selected?: boolean;
  disabled?: boolean;
  variant?: Variant;
  onClick?: () => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  selected = false,
  disabled = false,
  variant = 'filled',
  onClick,
}) => {
  const classNames = [
    'number-button',
    `number-button--${variant}`,
    selected ? 'number-button--selected' : '',
    disabled ? 'number-button--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {number}
    </button>
  );
};

export default NumberButton;

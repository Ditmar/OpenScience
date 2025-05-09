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

function NumberButton({
  number,
  selected,
  disabled,
  variant,
  onClick,
}: NumberButtonProps) {
  const finalSelected = selected ?? false;
  const finalDisabled = disabled ?? false;
  const finalVariant = variant ?? 'filled';

  const classNames = [
    'number-button',
    `number-button--${finalVariant}`,
    finalSelected ? 'number-button--selected' : '',
    finalDisabled ? 'number-button--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} onClick={onClick} disabled={finalDisabled}>
      {number}
    </button>
  );
}

export default NumberButton;


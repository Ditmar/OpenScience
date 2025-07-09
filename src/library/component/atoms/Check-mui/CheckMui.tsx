import React from 'react';
import { StyledCheckbox } from './CheckMui.style';
import type { IProps } from './types/IProps';

function CheckMui(props: IProps) {
  const {
    disabled,
    variant,
    onChange,
    name,
    value,
    checked,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'data-testid': dataTestid,
  } = props;

  return (
    <StyledCheckbox
      variant={variant}
      disabled={disabled}
      onChange={onChange}
      name={name}
      value={value}
      checked={checked}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      data-testid={dataTestid}
    />
  );
}

export default CheckMui;

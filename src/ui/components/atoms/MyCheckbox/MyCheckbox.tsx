// src/components/atoms/MyCheckbox/MyCheckbox.tsx
import React from 'react';
import type { MyCheckboxProps } from './Types/IProps';
import { StyledCheckbox, muiColorMap } from './Mycheckbox.styles';

function MyCheckbox({
  checked = false,
  onChange,
  disabled = false,
  variant = 'default',

  value,
  id,
  name,
  required,
  readOnly,
  tabIndex,
  className,
  style,
  onBlur,
  onFocus,
}: MyCheckboxProps) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const muiColor = muiColorMap[variant] ?? 'default';

  return (
    <StyledCheckbox
      checked={checked}
      onChange={handleCheckboxChange}
      disabled={disabled}
      color={muiColor}
      inputProps={{
        'aria-checked': checked,
        'aria-disabled': disabled,
        role: 'checkbox',
      }}
      customVariant={variant}
      value={value}
      id={id}
      name={name}
      required={required}
      readOnly={readOnly}
      tabIndex={tabIndex}
      className={className}
      style={style}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

export default MyCheckbox;

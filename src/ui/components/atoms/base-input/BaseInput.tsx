import { StyledIcon } from '../label-input/Label.styles';
import { StyledInput, StyledInputGroup } from './BaseInput.styles';
import type { BaseInputProps } from './types/IProps';

export function Input({
  type,
  onChange,
  placeholder,
  size = 'medium',
  disabled = false,
  iconName,
  ...props
}: BaseInputProps) {
  return (
    <StyledInputGroup>
      {iconName && (
        <StyledIcon iconSize={size} iconName={iconName} data-testid="icon" data-size={size} />
      )}
      <StyledInput
        size={size}
        variant="outlined"
        hiddenLabel
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        sx={{ ...props.sx }}
      />
    </StyledInputGroup>
  );
}

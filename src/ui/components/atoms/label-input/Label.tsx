import { LabelUi, Required, StyledIcon, StyledLabelWrapper } from './Label.styles';
import type { LabelProps } from './types/IProps';

export function Label({
  children,
  required = false,
  htmlFor,
  size = 'medium',
  iconName,
  sx = {},
  align,
  color,
}: LabelProps) {
  return (
    <StyledLabelWrapper>
      {iconName && <StyledIcon iconSize={size} iconName={iconName} />}
      <LabelUi
        component="label"
        htmlFor={htmlFor}
        variant="body2"
        size={size}
        sx={sx}
        align={align}
        color={color}
      >
        {children}
        {required && <Required>*</Required>}
      </LabelUi>
    </StyledLabelWrapper>
  );
}

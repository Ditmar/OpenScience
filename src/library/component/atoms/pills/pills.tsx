import React from 'react';
import type { IProps } from './types/IProps';
import { StyledPill, StyledIconWrapper, StyledContent } from './Pill.styles';

function Pill({
  text,
  ariaLabel,
  icon,
  iconPosition = 'left',
  color,
  variant,
  size,
  rounded,
  shadow,
  stroke,
}: IProps) {
  return (
    <StyledPill
      color={color}
      variant={variant}
      size={size}
      rounded={rounded}
      shadow={shadow}
      stroke={stroke}
      iconPosition={iconPosition}
      aria-label={ariaLabel ?? text}
    >
      {icon && iconPosition === 'left' && (
        <StyledIconWrapper iconPosition="left">{icon}</StyledIconWrapper>
      )}
      <StyledContent iconPosition={iconPosition}>{text}</StyledContent>
      {icon && iconPosition === 'right' && (
        <StyledIconWrapper iconPosition="right">{icon}</StyledIconWrapper>
      )}
    </StyledPill>
  );
}

export default Pill;

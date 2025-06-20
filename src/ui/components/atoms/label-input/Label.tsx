import { LabelUi, Required, StyledIcon, StyledLabelWrapper } from './Label.styles';
import type { LabelProps } from './types/IProps';

export function Label({ children, required, htmlFor, size, ...props }: LabelProps) {
  return (
    <StyledLabelWrapper>
      {props.iconName && <StyledIcon iconSize={size} iconName={props.iconName} />}
      <LabelUi
        component="label"
        htmlFor={htmlFor}
        variant="body2"
        size={size}
        sx={{
          ...props.sx,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
        {required && <Required>*</Required>}
      </LabelUi>
    </StyledLabelWrapper>
  );
}

import { StyledButton } from './MyButton.styles';
import type { MyButtonProps } from './MyButton.type';

function MyButton({ label, variant = 'contained', ...rest }: MyButtonProps) {
  return (
    <StyledButton variant={variant} {...rest}>
      {label}
    </StyledButton>
  );
}

export default MyButton;

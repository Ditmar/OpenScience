import { StyledButton } from './MyButton.styles';
import type { MyButtonProps } from './MyButton.type';

function MyButton({ label, ...props }: MyButtonProps) {
  return (
    <StyledButton className="test-button" variant="contained" {...props}>
      {label}
    </StyledButton>
  );
}

export default MyButton;

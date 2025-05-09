import { StyledButton } from './MyButton.Styles';
import type { MyButtonProps } from './Mybutton.type';

const MyButton = ({ label, ...props }: MyButtonProps) => {
  return (
    <StyledButton variant="contained" {...props}>
      {label}
    </StyledButton>
  );
};

export default MyButton;

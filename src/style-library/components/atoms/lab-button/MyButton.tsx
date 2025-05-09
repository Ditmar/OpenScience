import { StyledButton } from './MyButton.styles';
import type { MyButtonProps } from './MyButton.type';


const MyButton = ({ label, ...props }: MyButtonProps) => {
  return <StyledButton variant="contained" {...props}>{label}</StyledButton>;
};

export default MyButton;

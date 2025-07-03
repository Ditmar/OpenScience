import MenuIcon from '@mui/icons-material/Menu';
import { StyledHamburgerButton } from './hamburger-button.style';
import type { HamburgerButtonProps } from './types/IProps';

function HamburgerButton({ onClick, ariaLabel = 'Open menu' }: HamburgerButtonProps) {
  return (
    <StyledHamburgerButton onClick={onClick} aria-label={ariaLabel}>
      <MenuIcon />
    </StyledHamburgerButton>
  );
}

export default HamburgerButton;

import { StyledIconButton, Bar } from './BurgerIconButton.style';
import type { BurgerIconButtonProps } from './types/IProps';

export default function BurgerIconButton({
  onClick,
  ariaLabel = 'Toggle menu',
}: BurgerIconButtonProps) {
  return (
    <StyledIconButton onClick={onClick} aria-label={ariaLabel}>
      <Bar role="presentation" />
      <Bar role="presentation" />
      <Bar role="presentation" />
    </StyledIconButton>
  );
}

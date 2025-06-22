import type { IProps } from './types/IProps';
import { PillRoot, PillIcon } from './pills.styles';

function Pill(props: IProps) {
  const {
    text,
    color = 'neutral-dark',
    variant = 'filled',
    size = 'md',
    rounded = 'r_md',
    ariaLabel,
    shadow = false,
    stroke,
    icon,
    iconPosition = 'left',
  } = props;

  function renderIcon() {
    if (!icon) return null;
    if (typeof icon === 'string') {
      return null;
    }
    return icon;
  }

  return (
    <PillRoot
      text="100"
      color={color}
      variant={variant}
      size={size}
      rounded={rounded}
      shadow={shadow}
      stroke={stroke}
      tabIndex={0}
      role="status"
      aria-label={ariaLabel ?? text}
    >
      {icon && iconPosition === 'left' && (
        <PillIcon position="left" aria-hidden data-testid="pill-icon-left">
          {renderIcon()}
        </PillIcon>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <PillIcon position="right" aria-hidden data-testid="pill-icon-right">
          {renderIcon()}
        </PillIcon>
      )}
    </PillRoot>
  );
}

export default Pill;

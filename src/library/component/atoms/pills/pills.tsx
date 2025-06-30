import { PillRoot } from './pills.style';
import type { IProps } from './types/IProps';

function Pill(props: IProps) {
  const {
    text,
    icon,
    iconPosition = 'left',
    ariaLabel,
    color,
    variant,
    size,
    rounded,
    shadow,
    stroke,
  } = props;

  return (
    <PillRoot
      role="status"
      aria-label={ariaLabel ?? text}
      iconPosition={icon ? iconPosition : undefined}
      text={text}
      color={color}
      variant={variant}
      size={size}
      rounded={rounded}
      shadow={shadow}
      stroke={stroke}
    >
      {icon && iconPosition === 'left' && <span className="pill__icon">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span className="pill__icon">{icon}</span>}
    </PillRoot>
  );
}

export default Pill;

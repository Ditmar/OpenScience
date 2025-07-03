import type { ButtonUrlProps } from './types/IProps';
import { Button } from './Button-Url.styles';
import { Icon } from '../../../utils/vite-svgr/Icon';

export function ButtonUrl({
  iconName = 'fi-rr-copy',
  children,
  radius,
  variant = 'default',
  disabled,
  sx,
  className,
  onClick,
  type,
}: ButtonUrlProps) {
  return (
    <Button
      radius={radius}
      disabled={disabled}
      variant={variant}
      sx={sx}
      className={className}
      onClick={onClick}
      type={type}
    >
      <Icon iconName={iconName} />
      <span>{children}</span>
    </Button>
  );
}

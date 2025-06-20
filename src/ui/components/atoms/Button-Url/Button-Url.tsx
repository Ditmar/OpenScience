import type { ButtonUrlProps } from './types/IProps';
import { Button } from './Button-Url.styles';
import { Icon } from '../../../utils/vite-svgr/Icon';

export function ButtonUrl({
  loading,
  iconName = 'fi-rr-copy',
  children,
  radius,
  variant = 'default',
  ...props
}: ButtonUrlProps) {
  return (
    <Button
      radius={radius}
      disabled={props.disabled}
      variant={variant}
      sx={{
        ...props.sx,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Icon iconName={iconName} />
      <span>{children}</span>
    </Button>
  );
}
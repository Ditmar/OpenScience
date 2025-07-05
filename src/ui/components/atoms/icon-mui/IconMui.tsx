import type { IProps } from './types/IProps';
import { iconSx } from './IconMui.styles';

export function IconMui(props: IProps) {
  const { iconName: IconName, error, disabled, size } = props;

  const iconStyles = iconSx({ disabled, error, size });

  return <IconName sx={iconStyles} />;
}

import { type ButtonProps } from '@mui/material';
import type { IconName } from 'ui/utils/vite-svgr/types/IProps';

export type Radius = 'none' | 'small' | 'medium' | 'full';

export interface ButtonUrlProps extends ButtonProps {
  loading?: boolean;
  iconName?: IconName;
  radius?: Radius;
}

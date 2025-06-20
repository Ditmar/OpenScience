import { type TypographyProps } from '@mui/material';
import type { IconName } from 'ui/utils/vite-svgr/types/IProps';

export type Size = 'small' | 'medium' | 'large';
export interface LabelProps extends TypographyProps {
  required?: boolean;
  htmlFor?: string;
  iconName?: IconName;
  size?: Size;
}
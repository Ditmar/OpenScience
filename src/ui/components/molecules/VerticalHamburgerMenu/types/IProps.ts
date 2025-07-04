import type { SxProps, Theme } from '@mui/material';

export type MenuPosition = 'left' | 'right';

export interface VerticalHamburgerMenuProps {
  position?: MenuPosition;
  sx?: SxProps<Theme>;
}

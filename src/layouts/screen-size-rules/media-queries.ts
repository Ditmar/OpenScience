import { useTheme, useMediaQuery } from '@mui/material';
import type { Breakpoint } from '@mui/material';
import { breakpoints } from './breakpoints';

type BreakpointAlias =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'small-mobile'
  | 'small-mobile-large'
  | 'large-tablet';
type Direction = 'min' | 'max';

export function useBreakpoint(key: BreakpointAlias, direction: Direction = 'min'): boolean {
  const theme = useTheme();
  const isMUIKey = ['xs', 'sm', 'md', 'lg', 'xl'].includes(key);

  let query: string;

  if (isMUIKey) {
    query =
      direction === 'min'
        ? theme.breakpoints.up(key as Breakpoint)
        : theme.breakpoints.down(key as Breakpoint);
  } else {
    const px: number = breakpoints[key];
    query =
      direction === 'min' ? `(min-width: ${String(px)}px)` : `(max-width: ${String(px - 0.05)}px)`;
  }

  return useMediaQuery(query);
}

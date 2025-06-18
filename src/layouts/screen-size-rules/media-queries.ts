import { useTheme, useMediaQuery } from '@mui/material';
import type { Breakpoint } from '@mui/material';

function useBreakpoint(key: Breakpoint, direction: 'up' | 'down' = 'up'): boolean {
  const theme = useTheme();
  const query = direction === 'up' ? theme.breakpoints.up(key) : theme.breakpoints.down(key);
  return useMediaQuery(query);
}

export const useIsXsDown = () => useBreakpoint('xs', 'down');
export const useIsSmDown = () => useBreakpoint('sm', 'down');
export const useIsMdDown = () => useBreakpoint('md', 'down');
export const useIsLgDown = () => useBreakpoint('lg', 'down');
export const useIsXlDown = () => useBreakpoint('xl', 'down');

export const useIsXsUp = () => useBreakpoint('xs', 'up');
export const useIsSmUp = () => useBreakpoint('sm', 'up');
export const useIsMdUp = () => useBreakpoint('md', 'up');
export const useIsLgUp = () => useBreakpoint('lg', 'up');
export const useIsXlUp = () => useBreakpoint('xl', 'up');

export const useIsMobile = () => useIsSmDown();
export const useIsTabletUp = () => useIsMdUp();
export const useIsTabletDown = () => useIsMdDown();
export const useIsDesktopUp = () => useIsLgUp();
export const useIsDesktopDown = () => useIsLgDown();

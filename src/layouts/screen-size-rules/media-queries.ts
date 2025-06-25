import { useTheme, useMediaQuery } from '@mui/material';
import type { Breakpoint } from '@mui/material';
import { breakpoints } from './breakpoints';

type CustomBreakpointKey = keyof typeof breakpoints;

export function useBreakpoint(key: CustomBreakpointKey, direction: 'up' | 'down' = 'up'): boolean {
  const theme = useTheme();

  const isOfficialBreakpoint = ['xs', 'sm', 'md', 'lg', 'xl'].includes(key);

  let query: string;

  if (isOfficialBreakpoint) {
    if (direction === 'up') {
      query = theme.breakpoints.up(key as Breakpoint);
    } else {
      query = theme.breakpoints.down(key as Breakpoint);
    }
  } else {
    const px = breakpoints[key];
    if (direction === 'up') {
      query = `(min-width: ${px.toString()}px)`;
    } else {
      query = `(max-width: ${(px - 0.05).toString()}px)`;
    }
  }

  return useMediaQuery(query);
}

export const useIsXsDown = () => useBreakpoint('xs', 'down');
export const useIsSmDown = () => useBreakpoint('sm', 'down');
export const useIsMdDown = () => useBreakpoint('md', 'down');
export const useIsLgDown = () => useBreakpoint('lg', 'down');
export const useIsXlDown = () => useBreakpoint('xl', 'down');
export const useIsSmallMobileDown = () => useBreakpoint('small-mobile', 'down');
export const useIsSmallMobileLargeDown = () => useBreakpoint('small-mobile-large', 'down');
export const useIsLargeTabletDown = () => useBreakpoint('large-tablet', 'down');

export const useIsXsUp = () => useBreakpoint('xs', 'up');
export const useIsSmUp = () => useBreakpoint('sm', 'up');
export const useIsMdUp = () => useBreakpoint('md', 'up');
export const useIsLgUp = () => useBreakpoint('lg', 'up');
export const useIsXlUp = () => useBreakpoint('xl', 'up');
export const useIsSmallMobileUp = () => useBreakpoint('small-mobile', 'up');
export const useIsSmallMobileLargeUp = () => useBreakpoint('small-mobile-large', 'up');
export const useIsLargeTabletUp = () => useBreakpoint('large-tablet', 'up');

export const useIsMobile = () => useBreakpoint('sm', 'down');
export const useIsTabletUp = () => useBreakpoint('md', 'up');
export const useIsTabletDown = () => useBreakpoint('md', 'down');
export const useIsDesktopUp = () => useBreakpoint('lg', 'up');
export const useIsDesktopDown = () => useBreakpoint('lg', 'down');
export const useIsSmallMobile = () => useBreakpoint('small-mobile', 'down');
export const useIsSmallMobileLarge = () => useBreakpoint('small-mobile-large', 'down');
export const useIsLargeTablet = () => useBreakpoint('large-tablet', 'down');

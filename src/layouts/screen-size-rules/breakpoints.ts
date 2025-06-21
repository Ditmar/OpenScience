export const breakpoints = {
  xs: 0,
  'small-mobile': 320,
  sm: 480,
  'small-mobile-large': 568,
  md: 768,
  lg: 1024,
  'large-tablet': 1112,
  xl: 1280,
};

export const breakpointValues = {
  values: breakpoints,
};

export type BreakpointKey = keyof typeof breakpoints;

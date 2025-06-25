# Responsive Breakpoints and useBreakpoint Hook Usage

## Available Breakpoints

- MUI standard aliases:  
  `xs`, `sm`, `md`, `lg`, `xl`

- Custom breakpoints:  
  `small-mobile`, `small-mobile-large`, `large-tablet`

## Hook Signature

```ts
useBreakpoint(key: BreakpointAlias, direction: 'min' | 'max' = 'min'): boolean
```

- `key`: any of the breakpoint aliases above  
- `direction`: `'min'` for `(min-width)` queries, `'max'` for `(max-width)`

# Import paths summary

```ts
import { breakpoints } from './breakpoints'; // breakpoint values
import { useBreakpoint } from './media-queries'; // hook for breakpoints
import { theme } from './theme'; // theme with breakpoint integration
```


## How to Use

```tsx
import { useBreakpoint } from './media-queries';

function Example() {
  const isMobile = useBreakpoint('sm', 'max'); // screen ≤ sm breakpoint
  const isTabletUp = useBreakpoint('md', 'min'); // screen ≥ md breakpoint
  const isSmallMobile = useBreakpoint('small-mobile', 'max');
  const isLargeTabletUp = useBreakpoint('large-tablet', 'min');

  return (
    <>
      {isMobile && <p>Mobile screen or smaller</p>}
      {isTabletUp && <p>Tablet or larger</p>}
      {isSmallMobile && <p>Small mobile device detected</p>}
      {isLargeTabletUp && <p>Large tablet or bigger</p>}
    </>
  );
}
```

## Notes

- Use `'min'` to check if viewport is at least the given breakpoint.  
- Use `'max'` to check if viewport is up to the given breakpoint.  
- Custom breakpoints behave exactly like standard MUI breakpoints in the hook.  
- Avoid hardcoding pixel values; always use this centralized system.

---

This setup improves maintainability and consistency across your responsive design code.

Using Breakpoints in Styling
Material UI's theme.breakpoints.up() and theme.breakpoints.down() support only the MUI standard keys (xs, sm, md, lg, xl). For custom breakpoints, use raw media queries.

<Box
  sx={{
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
  }}
>
  Responsive Text
</Box>

# Example for custom breakpoint in sx prop

<Box
  sx={{
    fontSize: '14px',
    '@media (min-width: 568px)': { // small-mobile-large custom breakpoint
      fontSize: '16px',
    },
  }}
>
  Custom Breakpoint Text
</Box>

# Additional Examples
# Responsive Button
```ts

import { Button } from '@mui/material';
import { useBreakpoint } from './media-queries';

function ResponsiveButton() {
  const isLargeScreen = useBreakpoint('lg', 'min');
  return (
    <Button size={isLargeScreen ? 'large' : 'medium'}>
      Click me
    </Button>
  );
}
```
# Conditionally render content based on breakpoints

```ts

import { Typography } from '@mui/material';
import { useBreakpoint } from './media-queries';

function ResponsiveMessage() {
  const isSmallMobile = useBreakpoint('small-mobile', 'max');
  return (
    <Typography variant="body1" color={isSmallMobile ? 'error' : 'textPrimary'}>
      {isSmallMobile ? 'You are on a small mobile device' : 'Standard view'}
    </Typography>
  );
}
```

import { styled } from '@mui/material/styles';

export const IconButton = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  cursor: 'pointer',

  '& svg, & img': {
    width: 24,
    height: 24,
    userSelect: 'none',
    pointerEvents: 'none',
  },
});

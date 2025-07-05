import { styled } from '@mui/material';

export const DotsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DotButton = styled('button')<{ active?: boolean }>(({ active }) => ({
  backgroundColor: active ? '#3994ff' : '#88bfff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  width: '0.75rem',
  height: '0.75rem',
  margin: '1rem 0.3rem',
}));

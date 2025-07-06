import { styled } from '@mui/material';
import { theme } from '../../../../globals/theme';

export const DotsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DotButton = styled('button')<{ active?: boolean }>(({ active }) => ({
  backgroundColor: active ? theme.colors.brand.tertiary[500] : theme.colors.brand.tertiary[300],
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  width: '0.75rem',
  height: '0.75rem',
  margin: '1rem 0.3rem',
}));

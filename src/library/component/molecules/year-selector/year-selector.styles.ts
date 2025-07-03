import { styled } from '@mui/material/styles';

export const YearSelectorContainer = styled('div')({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});

export const YearSelectorWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(-1),
  left: theme.spacing(0.75),
  zIndex: 2,
  width: '100vw',
  padding: theme.spacing(2),
}));

export const YearListContainer = styled('div')<{ hidden?: boolean }>(({ theme, hidden }) => ({
  display: hidden ? 'none' : 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: theme.spacing(1),

  '&::-webkit-scrollbar': {
    width: theme.spacing(0.75),
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.grey[200],
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(0.375),
  },
}));

export const FullScreenHero = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

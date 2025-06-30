import { styled } from '@mui/material/styles';

export const CarouselWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

export const CarouselTitle = styled('div')(({ theme }) => ({
  '& span': {
    color: theme.palette.info.dark,
    fontSize: '3rem',
  },
}));

export const CarouselContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CarouselItems = styled('div')(() => ({
  display: 'flex',
  gap: '1rem',
  overflow: 'hidden',
  '& div': {
    margin: 0,
    padding: 0,
  },
}));

export const CarouselItem = styled('div')(({ theme }) => ({
  '& div': {
    height: '100%',
  },
  '& p:nth-of-type(1)': {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300,
    margin: 0,
    padding: 0,
  },
  '& p:nth-of-type(2)': {
    color: theme.palette.success.main,
    margin: 0,
    padding: 0,
  },
}));

export const ButtonBase = styled('button')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  height: '2rem',
  width: '2rem',
  margin: '1rem',
  padding: 0,
  position: 'relative',
  bottom: '2rem',
  zIndex: 10,
}));

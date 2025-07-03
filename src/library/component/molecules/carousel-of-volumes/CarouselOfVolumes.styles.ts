import { styled } from '@mui/material/styles';
import tokens from 'style-library/themes/tokens/tokens';

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

export const CarouselTitle = styled('div')(() => ({
  '& span': {
    color: tokens.colors?.volume_title,
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

export const CarouselItem = styled('div')(() => ({
  '& div': {
    height: '100%',
  },
  '& p:nth-of-type(1)': {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 275,
    color: tokens.colors?.volume_date,
    margin: 0,
    padding: 0,
  },
  '& p:nth-of-type(2)': {
    color: tokens.colors?.volume_text,
    fontWeight: 700,
    margin: 0,
    padding: 0,
  },
}));

export const ButtonBase = styled('button')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  height: '1.6rem',
  width: '1.6rem',
  margin: '0.1rem',
  padding: 0,
  position: 'relative',
  bottom: '2rem',
  zIndex: 10,
}));

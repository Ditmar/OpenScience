import { styled } from '@mui/material';
import { theme } from '../../../../globals/theme';

export const Section = styled('section')({
  '& .separator': {
    margin: '0 0.5rem',
  },
});

export const Head = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '1rem',

  '& .volume-box': {
    display: 'inline-flex',
    alignItems: 'center',
    background: theme.colors.neutral.graySoft[25],
    padding: '0.5rem 1rem',
  },
});

export const Content = styled('div')(({ theme: muiTheme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  marginBottom: '1.5rem',
  width: '100%',

  [muiTheme.breakpoints.up(569)]: {
    flexDirection: 'row-reverse',
    padding: '0 1rem',
    gap: '2rem',
  },
}));

export const ImageContainer = styled('div')(({ theme: muiTheme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1.5rem',
  width: '100%',

  [muiTheme.breakpoints.up(569)]: {
    flex: '0 0 30%',
    maxWidth: '30%',
    marginTop: '0.5rem',
    placeSelf: 'flex-start',

    '& img': {
      width: '100%',
      height: 'auto',
      objectFit: 'fill',
      display: 'block',
    },
  },
}));

export const ArticlesContainer = styled('div')(({ theme: muiTheme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  placeSelf: 'flex-start',
  width: '100%',

  [muiTheme.breakpoints.up(569)]: {
    flex: '0 0 70%',
    maxWidth: '70%',
  },
}));

export const LabelWrapper = styled('div')({
  '& .label': {
    backgroundColor: 'transparent',
    margin: '0 -1rem',
    padding: 0,
    width: '100%',
  },
});

export const FadeWrapper = styled('div')<{ fade: boolean }>(({ fade }) => ({
  opacity: fade ? 0 : 1,
  transition: 'opacity 0.4s',
}));

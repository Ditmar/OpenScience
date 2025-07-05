import { styled } from '@mui/material/styles';

export const ArticleWrapper = styled('div')({
  marginTop: '1rem',
});

export const DateWrapper = styled('div')({
  p: {
    fontSize: '1rem',
    '@media (max-width: 320px)': { fontSize: '0.7rem' },
    '@media (min-width: 321px) and (max-width: 375px)': { fontSize: '0.75rem' },
    '@media (min-width: 768px)': { fontSize: '1rem' },
    '@media (min-width: 1024px)': { fontSize: '1.2rem' },
    '@media (min-width: 1440px)': { fontSize: '1.5rem' },
  },
});

export const ArticleTitleWrapper = styled('div')({
  p: {
    fontSize: '1.2rem',
    lineHeight: '1.3rem',
    marginTop: 0,
    paddingLeft: 0,
    '@media (max-width: 320px)': {
      fontSize: '0.8rem',
      lineHeight: '0.9rem',
      marginTop: '0.5rem',
    },
    '@media (min-width: 321px) and (max-width: 375px)': {
      fontSize: '0.875rem',
      lineHeight: '1.1rem',
    },
    '@media (min-width: 1024px)': {
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
    },
    '@media (min-width: 1440px)': {
      fontSize: '2.5rem',
      lineHeight: '3.492rem',
    },
  },
});

export const ArticleDescriptionWrapper = styled('div')({
  p: {
    marginBottom: '2rem',
    fontSize: '0.85rem',
    lineHeight: '1rem',
    '@media (max-width: 320px)': {
      fontSize: '0.7rem',
      lineHeight: '0.75rem',
      marginTop: '-0.5rem',
    },
    '@media (min-width: 321px) and (max-width: 375px)': {
      fontSize: '0.75rem',
      lineHeight: '0.85rem',
    },
    '@media (min-width: 1024px)': {
      fontSize: '0.95rem',
      lineHeight: '1.2rem',
    },
    '@media (min-width: 1440px)': {
      fontSize: '2.25rem',
      lineHeight: '3.06rem',
    },
  },
});

export const Divider = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  width: '100%',
});

export const AuthorWrapper = styled('div')({
  backgroundColor: 'transparent',
  height: '3rem',
  width: '50%',
  p: {
    fontSize: '0.75rem',
  },
  '@media (max-width: 320px)': {
    marginTop: '-2.5rem',
    p: { fontSize: '0.625rem' },
  },
  '@media (min-width: 321px) and (max-width: 375px)': {
    marginTop: '-1.5rem',
    p: { fontSize: '0.7rem' },
  },
  '@media (min-width: 768px)': {
    marginTop: '1rem',
    p: { fontSize: '0.75rem' },
  },
  '@media (min-width: 1024px)': {
    marginTop: '-3rem',
    p: { fontSize: '0.85rem' },
  },
  '@media (min-width: 1440px)': {
    marginBottom: '2rem',
    p: { fontSize: '1.5rem' },
  },
});

export const ButtonsWrapper = styled('div')({
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'right',
  width: '30%',
  a: {
    margin: '0 5%',
  },
  button: {
    height: '5rem',
    width: '2.5rem',
  },
  '@media (max-width: 320px)': {
    marginBottom: '-1rem',
    paddingTop: 0,
    button: {
      height: '4rem',
      width: '2rem',
    },
  },
  '@media (min-width: 321px) and (max-width: 375px)': {
    marginBottom: '-1rem',
    marginTop: '-1rem',
    button: {
      height: '4.5rem',
      width: '2.25rem',
    },
  },
  '@media (min-width: 1024px)': {
    button: {
      height: '6rem',
      width: '3rem',
    },
  },
  '@media (min-width: 1440px)': {
    button: {
      height: '7.875rem',
      width: '3.75rem',
    },
  },
});

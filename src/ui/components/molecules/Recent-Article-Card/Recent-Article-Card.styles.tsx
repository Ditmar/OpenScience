import { styled } from '@mui/material/styles';
import { theme } from '../../../../layouts/screen-size-rules/theme';

export const ArticleWrapper = styled('div')({
  marginTop: '1rem',
});

export const DateWrapper = styled('div')({
  p: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: { fontSize: '0.7rem' },
    [theme.breakpoints.up('sm')]: { fontSize: '0.75rem' },
    [theme.breakpoints.up('lg')]: { fontSize: '1.2rem' },
    [theme.breakpoints.up('xl')]: { fontSize: '1.5rem' },
  },
});

export const ArticleTitleWrapper = styled('div')({
  p: {
    fontSize: '1.2rem',
    lineHeight: '1.3rem',
    marginTop: 0,
    paddingLeft: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      lineHeight: '0.9rem',
      marginTop: '0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
      lineHeight: '1.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
      lineHeight: '3.492rem',
    },
  },
});

export const ArticleDescriptionWrapper = styled('div')({
  p: {
    fontSize: '0.85rem',
    lineHeight: '1rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      lineHeight: '0.75rem',
      marginTop: '-0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.75rem',
      lineHeight: '0.85rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.95rem',
      lineHeight: '1.2rem',
    },
    [theme.breakpoints.up('xl')]: {
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
  [theme.breakpoints.down('xs')]: {
    marginTop: '-2.5rem',
    p: { fontSize: '0.625rem' },
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '-1.5rem',
    p: { fontSize: '0.7rem' },
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '1rem',
    p: { fontSize: '0.75rem' },
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '-3rem',
    p: { fontSize: '0.85rem' },
  },
  [theme.breakpoints.up('xl')]: {
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
  [theme.breakpoints.down('xs')]: {
    marginBottom: '-1rem',
    paddingTop: 0,
    button: {
      height: '4rem',
      width: '2rem',
    },
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '-1rem',
    marginTop: '-1rem',
    button: {
      height: '4.5rem',
      width: '2.25rem',
    },
  },
  [theme.breakpoints.up('lg')]: {
    button: {
      height: '6rem',
      width: '3rem',
    },
  },
  [theme.breakpoints.up('xl')]: {
    button: {
      height: '7.875rem',
      width: '3.75rem',
    },
  },
});

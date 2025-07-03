import type { Theme } from '@mui/material/styles';
import type { CSSProperties } from 'react';

export const bannerNavbarStyles = (theme: Theme) => ({
  appBar: {
    background: '#0793BF',
    padding: 0,
    margin: 0,
    borderBottom: '13px solid #02322C',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: { xs: 56, sm: 64 },
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
    marginLeft: 0,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    width: { xs: '160px', sm: '160px', md: '160px' },
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
  },
  logoImage: {
    display: 'block',
    width: '80%',
    height: '100%',
    objectFit: 'contain',
    marginLeft: 0,
  } as CSSProperties,
  spacer: {
    flexGrow: 1,
  },
  searchButton: {
    color: theme.palette.common.white,
  },
  dialogPaper: {
    backgroundColor: theme.palette.background.paper,
  },
  searchForm: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    p: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  searchInput: {
    fontSize: '1.2rem',
    p: theme.spacing(2),
    borderBottom: '2px solid #0793BF',
    width: '100%',
  },
  submitButton: {
    mt: theme.spacing(3),
    alignSelf: 'flex-end',
    backgroundColor: '#0793BF',
    '&:hover': {
      backgroundColor: '#0678a1',
    },
  },
});

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IFooterContainerProps {
  size: 'small' | 'medium' | 'large';
}

const minHeightMap = {
  small: '6rem',
  medium: '10rem',
  large: '13rem',
};

export const FooterContainer = styled('footer')<IFooterContainerProps>(({ theme, size }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 2rem 1.5rem',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: minHeightMap[size],
}));

export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  '& svg, & img': {
    marginBottom: '1rem',
    // Mobile-first approach
    width: '3.5rem', // xs
    [theme.breakpoints.up('sm')]: {
      width: '4.5rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '8rem',
    },
    [theme.breakpoints.up('xl')]: {
      width: '10rem',
    },
  },
}));

export const FooterTitle = styled(Typography)(({ theme }) => ({
  alignSelf: 'stretch', // Use stretch to fill width
  textAlign: 'center', // Center the text
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  // Mobile-first font sizes
  fontSize: '0.8rem', // xs
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.4rem',
  },
}));

export const VariablesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: '37.5rem',
  width: '100%', // Ensure it takes up space
  position: 'relative',
  gap: '0.8rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '100%',
    width: '0.25rem',
    backgroundColor: theme.palette.divider,
  },
}));

export const FooterSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  width: '45%', // Use a consistent width
});

export const FooterSectionInner = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align text to the left within the section
  gap: '0.4rem',
  marginTop: '0.4rem',
});

export const SectionText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  letterSpacing: '0.0625rem',
  textAlign: 'center',
  // Mobile-first font sizes
  fontSize: '0.6rem', // xs
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.85rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
}));

export const LocationWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '5rem',
});

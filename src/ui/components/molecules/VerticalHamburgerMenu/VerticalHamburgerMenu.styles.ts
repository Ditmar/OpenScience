import { Box, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import tokens from '../../../../style-library/themes/tokens/tokens.json';

export interface MenuContainerProps {
  side: 'left' | 'right';
}

export const MenuContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'side',
})<MenuContainerProps>(({ theme, side }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  [side]: theme.spacing(2),
  zIndex: theme.zIndex.appBar,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.text.primary,
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  width: 56,
  height: 56,
  padding: theme.spacing(1),
  justifyContent: 'center',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'scale(1.1)',
    transition: 'transform 0.2s ease',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.customBlue.main,
  padding: 0,
}));

export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: tokens.typography.fontSizes.headingone,
}));

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledMenuList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: 0,
  paddingBottom: 0,
  marginTop: theme.spacing(-1),
  marginBottom: theme.spacing(0),
  gap: theme.spacing(0),
}));

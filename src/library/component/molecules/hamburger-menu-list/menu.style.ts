import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledMenuList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  gap: theme.spacing(0),
}));

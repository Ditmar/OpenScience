import { styled } from '@mui/material';
import ButtonMui from '@mui/material/Button';

export const ButtonStyled = styled(ButtonMui)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));
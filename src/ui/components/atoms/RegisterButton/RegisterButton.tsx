import { Button as MuiButton, styled } from '@mui/material';

const StyledRegisterButton = styled(MuiButton)(({ theme }) => ({
  minWidth: '180px',
  height: '48px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

interface Props {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function RegisterButton({ onClick, disabled = false, loading = false }: Props) {
  return (
    <StyledRegisterButton
      onClick={onClick}
      disabled={disabled}
      data-testid="register-button"
      aria-label="Registrarse"
    >
      {loading ? 'Cargando...' : 'REGISTRARSE'}
    </StyledRegisterButton>
  );
}

import { Button as MuiButton, styled } from '@mui/material';

const StyledLoginButton = styled(MuiButton)(({ theme }) => ({
  minWidth: '180px',
  height: '48px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  border: `1px solid ${theme.palette.common.white}`,
  color: theme.palette.common.white,
  backgroundColor: 'transparent',
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface Props {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function LoginButton({ onClick, disabled = false, loading = false }: Props) {
  return (
    <StyledLoginButton
      onClick={onClick}
      disabled={disabled}
      data-testid="login-button"
      aria-label="Iniciar sesión"
    >
      {loading ? 'Cargando...' : 'INICIAR SESIÓN'}
    </StyledLoginButton>
  );
}

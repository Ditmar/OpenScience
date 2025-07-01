import { Button } from '@mui/material';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function LoginButton({ onClick, disabled = false, loading = false }: Props) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      data-testid="login-button"
      aria-label="Iniciar sesión"
      fullWidth
      sx={{
        color: '#ffffff',
        borderColor: '#ffffff',
        minWidth: '180px',
        height: '48px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        paddingY: 1.5,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
        },
      }}
    >
      {loading ? 'Cargando...' : 'INICIAR SESIÓN'}
    </Button>
  );
}

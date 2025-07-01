import { Button } from '@mui/material';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function RegisterButton({ onClick, disabled = false, loading = false }: Props) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      data-testid="register-button"
      aria-label="Registrarse"
      fullWidth
      sx={{
        backgroundColor: '#003c2f',
        color: '#ffffff',
        minWidth: '180px',
        height: '48px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        paddingY: 1.5,
        '&:hover': {
          backgroundColor: '#005645',
        },
      }}
    >
      {loading ? 'Cargando...' : 'REGISTRARSE'}
    </Button>
  );
}

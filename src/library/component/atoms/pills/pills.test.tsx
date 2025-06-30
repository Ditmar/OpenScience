import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import AddIcon from '@mui/icons-material/Add';
import { lightTheme } from '../../../../style-library/themes/default';
import Pill from './pills';
import type { IProps } from './types/IProps';

describe('Pill Component', () => {
  const renderWithTheme = (props?: Partial<IProps>) =>
    render(
      <ThemeProvider theme={lightTheme}>
        <Pill
          text={props?.text ?? 'Texto de prueba'}
          color={props?.color ?? 'neutral-light'}
          variant={props?.variant ?? 'filled'}
          size={props?.size ?? 'md'}
          rounded={props?.rounded ?? 'r_md'}
          shadow={props?.shadow}
          stroke={props?.stroke}
          icon={props?.icon}
          iconPosition={props?.iconPosition}
          ariaLabel={props?.ariaLabel}
        />
      </ThemeProvider>,
    );

  it('debería renderizar texto correctamente', () => {
    renderWithTheme();
    expect(screen.getByText(/Texto de prueba/i)).toBeInTheDocument();
  });

  it('debería aplicar variantes y colores sin errores', () => {
    renderWithTheme({
      text: 'Texto',
      color: 'brand-primary',
      variant: 'soft',
      size: 'lg',
      shadow: true,
      stroke: 'border-strong',
    });
    expect(screen.getByText(/Texto/i)).toBeInTheDocument();
  });

  it('debería mostrar ícono a la izquierda', () => {
    const icon = <AddIcon data-testid="icon" />;
    renderWithTheme({ text: 'Texto', icon, iconPosition: 'left' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.firstChild).toBe(screen.getByTestId('icon'));
  });

  it('debería mostrar ícono a la derecha', () => {
    const icon = <AddIcon data-testid="icon" />;
    renderWithTheme({ text: 'Texto', icon, iconPosition: 'right' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.lastChild).toBe(screen.getByTestId('icon'));
  });

  it('debería usar ariaLabel si se provee explícitamente', () => {
    renderWithTheme({ text: 'Texto', ariaLabel: 'Etiqueta personalizada' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Etiqueta personalizada');
  });

  it('debería asignar aria-label basado en text si no se provee', () => {
    renderWithTheme({ text: 'Texto accesible' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Texto accesible');
  });

  it('no debería mostrar ícono si no se pasa', () => {
    renderWithTheme({ text: 'Texto' });
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});

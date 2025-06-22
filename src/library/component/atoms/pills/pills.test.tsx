import { render, screen } from '@testing-library/react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pill from './pills';

function isTransparentColor(color: string): boolean {
  return color === 'transparent' || color === 'rgba(0, 0, 0, 0)';
}

describe('Componente <Pill />', () => {
  const text = 'Texto base';
  const color = 'brand-primary';
  const variant = 'filled';
  const size = 'md';
  const rounded = 'r_md';
  const iconPosition = 'left';

  test('debe renderizar texto correctamente', () => {
    render(
      <Pill
        text={text}
        color={color}
        variant={variant}
        size={size}
        rounded={rounded}
        iconPosition={iconPosition}
      />,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('aplica aria-label cuando se proporciona', () => {
    const ariaLabel = 'Etiqueta personalizada';

    render(
      <Pill
        text={text}
        color={color}
        variant={variant}
        size={size}
        rounded={rounded}
        iconPosition={iconPosition}
        ariaLabel={ariaLabel}
      />,
    );

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', ariaLabel);
  });

  test('muestra ícono a la izquierda', () => {
    render(
      <Pill
        text={text}
        color={color}
        variant={variant}
        size={size}
        rounded={rounded}
        icon={<CheckCircleOutlineIcon data-testid="icon-left" />}
        iconPosition="left"
      />,
    );

    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
  });

  test('usa estilo outline con stroke', () => {
    render(
      <Pill
        text={text}
        color={color}
        variant="outline"
        size={size}
        rounded={rounded}
        stroke="border-soft"
        iconPosition={iconPosition}
      />,
    );

    const element = screen.getByText(text);
    const styles = window.getComputedStyle(element);

    expect(styles.border).toContain('solid');
    expect(isTransparentColor(styles.backgroundColor)).toBe(true);
  });

  test('usa estilo soft', () => {
    render(
      <Pill
        text={text}
        color={color}
        variant="soft"
        size={size}
        rounded={rounded}
        iconPosition={iconPosition}
      />,
    );

    const element = screen.getByText(text);
    const styles = window.getComputedStyle(element);

    expect(styles.backgroundColor).toContain('rgba');
    expect(styles.backgroundColor).toContain('0.12');
  });
});

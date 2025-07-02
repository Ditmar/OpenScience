import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Label } from './Label';

vi.mock('../../../utils/vite-svgr/Icon', () => ({
  Icon: ({ iconName }: { iconName: string }) => <span data-testid="icon">{iconName}</span>,
}));

describe('Label Component', () => {
  it('renderiza correctamente con props por defecto', () => {
    render(<Label>Website Address</Label>);
    expect(screen.getByText('Website Address')).toBeInTheDocument();
  });

  it('muestra el icono cuando se provee iconName', () => {
    render(<Label iconName="fi-sr-globe">Label con icono</Label>);
    expect(screen.getByTestId('icon')).toHaveTextContent('fi-sr-globe');
  });

  it('agrega el atributo htmlFor correctamente', () => {
    render(<Label htmlFor="input-id">Label para input</Label>);
    expect(screen.getByText('Label para input')).toHaveAttribute('for', 'input-id');
  });

  it('muestra asterisco cuando required es true', () => {
    render(<Label required>Label requerido</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});

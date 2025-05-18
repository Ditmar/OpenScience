import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // ✅ IMPORTACIÓN VITEST
import MainInput from './MainInput';

describe('MainInput', () => {
  it('renderiza con label', () => {
    render(<MainInput label="Test" placeholder="Hola" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('muestra hint y error correctamente', () => {
    const { rerender } = render(
      <MainInput label="Test" placeholder="Hola" value="" onChange={() => {}} hint="Consejo" />,
    );
    expect(screen.getByText('Consejo')).toBeInTheDocument();

    rerender(
      <MainInput label="Test" placeholder="Hola" value="" onChange={() => {}} error="Error" />,
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('llama onChange al escribir', () => {
    const handleChange = vi.fn(); // ✅ CAMBIO CLAVE
    render(<MainInput label="Test" placeholder="Hola" value="" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Hola'), { target: { value: 'nuevo' } });
    expect(handleChange).toHaveBeenCalled();
  });
});

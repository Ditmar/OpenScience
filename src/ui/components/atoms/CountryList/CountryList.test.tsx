import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CountryList } from './CountryList';

// ✅ Datos de prueba
const mockCountries = [
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
];

describe('CountryList Component', () => {
  
  // ✅ Prueba unitaria: Renderiza correctamente con props
  it('renders correctly with props', () => {
    render(<CountryList countries={mockCountries} selectedCountry="ES" isOpen onClose={() => {}} onSelectCountry={() => {}} />);
    
    expect(screen.getByText('Spain')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('France')).toBeInTheDocument();
  });

  // ✅ Prueba de interacción: Selección de país con clic
  it('selects a country on click', () => {
    const onSelect = vi.fn();
    render(<CountryList countries={mockCountries} selectedCountry="" isOpen onClose={() => {}} onSelectCountry={onSelect} />);
    
    fireEvent.click(screen.getByText('France'));
    
    expect(onSelect).toHaveBeenCalledWith('FR');
  });

  // ✅ Prueba de scroll: Simulación del comportamiento de desplazamiento
  it('allows scrolling', () => {
    render(<CountryList countries={mockCountries} selectedCountry="" isOpen onClose={() => {}} onSelectCountry={() => {}} />);
    
    const dropdown = screen.getByRole('list'); // Identificar la lista desplegable
    fireEvent.scroll(dropdown, { target: { scrollTop: 50 } });

    expect(dropdown.scrollTop).toBe(50);
  });

  // ✅ Snapshot: Guarda un estado visual del componente
  it('matches snapshot', () => {
    const { container } = render(<CountryList countries={mockCountries} selectedCountry="US" isOpen onClose={() => {}} onSelectCountry={() => {}} />);
    
    expect(container).toMatchSnapshot(); // Compara con el estado visual esperado
  });

  // ✅ Prueba con teclado: Navegar con flechas y seleccionar con "Enter"
  it('selects a country using keyboard navigation', () => {
    const onSelect = vi.fn();
    render(<CountryList countries={mockCountries} selectedCountry="" isOpen onClose={() => {}} onSelectCountry={onSelect} />);
    
    fireEvent.keyDown(screen.getByText('Spain'), { key: 'ArrowDown' });
    fireEvent.keyDown(screen.getByText('United States'), { key: 'Enter' });

    expect(onSelect).toHaveBeenCalledWith('US');
  });
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { Shadows, Theme } from '@mui/material/styles';
import NavbarMenu from './NavbarMenu';
import type { NavbarItem } from './types/IProps';

const clicks: string[] = [];

const mockItems: NavbarItem[] = [
  { children: 'ARTÍCULOS', icon: 'articles', onClick: () => clicks.push('ARTÍCULOS') },
  { children: 'INICIO', icon: 'start', onClick: () => clicks.push('INICIO') },
  { children: 'VOLUMENES', icon: 'volumes', onClick: () => clicks.push('VOLUMENES') },
];

const theme: Theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  customColors: {
    secondary: '#f50057',
  },
});

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

function createMock() {
  const fn = () => {
    fn.calls += 1;
  };
  fn.calls = 0;
  return fn;
}

describe('NavbarMenu', () => {
  let onOpenMock: ReturnType<typeof createMock>;
  let onCloseMock: ReturnType<typeof createMock>;

  const baseProps = {
    items: mockItems,
    backgroundImage: '',
    alt: 'Test alt',
    className: 'test-class',
    isOpen: true,
    onOpen: () => {},
    onClose: () => {},
  };

  beforeEach(() => {
    clicks.length = 0;
    onOpenMock = createMock();
    onCloseMock = createMock();
  });

  test('renderiza los botones con texto e iconos', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={baseProps.isOpen}
        onOpen={baseProps.onOpen}
        onClose={baseProps.onClose}
      />,
    );
    expect(screen.getByText(/ARTÍCULOS/i)).toBeInTheDocument();
    expect(screen.getByText(/INICIO/i)).toBeInTheDocument();
    expect(screen.getByText(/VOLUMENES/i)).toBeInTheDocument();
  });

  test('dispara onClick al pulsar botón', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={baseProps.isOpen}
        onOpen={baseProps.onOpen}
        onClose={baseProps.onClose}
      />,
    );
    const button = screen.getByRole('button', { name: /ARTÍCULOS/i });
    fireEvent.click(button);
    expect(clicks.includes('ARTÍCULOS')).toBe(true);
  });

  test('los botones son accesibles por foco', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={baseProps.isOpen}
        onOpen={baseProps.onOpen}
        onClose={baseProps.onClose}
      />,
    );
    const button = screen.getByRole('button', { name: /INICIO/i });
    button.focus();
    expect(button).toHaveFocus();
  });

  test('los botones tienen aria-labels accesibles', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={baseProps.isOpen}
        onOpen={baseProps.onOpen}
        onClose={baseProps.onClose}
      />,
    );
    const button = screen.getByLabelText(/artículos/i);
    expect(button).toBeInTheDocument();
  });

  test('hace click en footer y llama onClose', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={baseProps.isOpen}
        onOpen={baseProps.onOpen}
        onClose={onCloseMock}
        footerItem={{
          children: 'SALIR',
          icon: 'Close-URL',
          onClick: () => clicks.push('SALIR'),
        }}
      />,
    );
    const footerButton = screen.getByRole('button', { name: /SALIR/i });
    fireEvent.click(footerButton);
    expect(clicks.includes('SALIR')).toBe(true);
    expect(onCloseMock.calls).toBeGreaterThan(0);
  });

  test('muestra botón de "Abrir menú" si isOpen es false', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={false}
        onOpen={baseProps.onOpen}
        onClose={baseProps.onClose}
      />,
    );
    expect(screen.getByRole('button', { name: /abrir menú/i })).toBeInTheDocument();
  });

  test('llama onOpen al hacer click en "Abrir menú"', () => {
    renderWithTheme(
      <NavbarMenu
        items={baseProps.items}
        backgroundImage={baseProps.backgroundImage}
        alt={baseProps.alt}
        className={baseProps.className}
        isOpen={false}
        onOpen={onOpenMock}
        onClose={baseProps.onClose}
      />,
    );
    const openButton = screen.getByRole('button', { name: /abrir menú/i });
    fireEvent.click(openButton);
    expect(onOpenMock.calls).toBeGreaterThan(0);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';
import logoImage from '../../../../assets/icons/logo.svg';
import burgerIcon from '../../../../assets/icons/burger-menu.svg?raw';

describe('NavigationMenu', () => {
  const logoProps = {
    logoSrc: logoImage as unknown as string,
    icon: burgerIcon,
  };

  test('renders NavigationMenu with logo and menu items', () => {
    render(<NavigationMenu logoAlt={''} logoVariant={'default'} {...logoProps} />);

    expect(screen.getByAltText('Logotipo de la empresa')).toBeInTheDocument();
    expect(screen.getByText('Articulos')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Volumenes')).toBeInTheDocument();
  });

  test('hides menu items and shows burger icon on small screens', () => {
    window.innerWidth = 500;
    render(<NavigationMenu logoAlt={''} logoVariant={'default'} {...logoProps} />);

    expect(screen.queryByText('Articulos')).not.toBeInTheDocument();
    expect(screen.queryByText('Inicio')).not.toBeInTheDocument();
    expect(screen.queryByText('Volumenes')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /burger/i })).toBeInTheDocument();
  });

  test('opens and closes burger menu on button click', () => {
    render(<NavigationMenu logoAlt={''} logoVariant={'default'} {...logoProps} />);
    const burgerButton = screen.getByRole('button', { name: /burger/i });
    fireEvent.click(burgerButton);

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();

    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Inicio')).not.toBeInTheDocument();
    expect(screen.queryByText('Servicios')).not.toBeInTheDocument();
    expect(screen.queryByText('Contacto')).not.toBeInTheDocument();
  });

  test('renders correctly on large screens', () => {
    window.innerWidth = 1024;
    render(<NavigationMenu logoAlt={''} logoVariant={'default'} {...logoProps} />);

    expect(screen.getByAltText('Logotipo de la empresa')).toBeInTheDocument();
    expect(screen.getByText('Articulos')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Volumenes')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /burger/i })).not.toBeInTheDocument();
  });
});



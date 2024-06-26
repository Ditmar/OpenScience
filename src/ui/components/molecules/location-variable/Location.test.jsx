import { render, screen } from '@testing-library/react';
import Location from './Location.tsx';

describe('Testing Divider React Component', () => {
  test('Should be rendered with a solid style', () => {
    render(<Location variant="solid" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass('divider--solid');
  });
  test('should be rendere label', () => {
    render(<Location>UBICACIÓN</Location>);
    const lavelElement = screen.getByText('UBICACIÓN');
    expect(lavelElement).toBeInTheDocument();
  });
  test('should be rendere location', () => {
    const location = '<svg><circle cx="25" cy="25" r="20" /></svg>';
    render(<Location icon={location} />);
    const buttonElement = screen.getByTestId('location__button');
    expect(buttonElement).toBeInTheDocument();
  });
  test('should be rendere label1', () => {
    render(<Location>SÍGUENOS EN</Location>);
    const lavelElement = screen.getByText('SÍGUENOS EN');
    expect(lavelElement).toBeInTheDocument();
  });
  test('should be rendere facebook', () => {
    const Facebook = '<svg><circle cx="25" cy="25" r="20" /></svg>';
    render(<Location icon1={Facebook} />);
    const buttonElement = screen.getByTestId('location__button1');
    expect(buttonElement).toBeInTheDocument();
  });
});

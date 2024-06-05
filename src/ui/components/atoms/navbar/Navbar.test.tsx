import { render, screen } from '@testing-library/react';
import ArticlesIcon from '../../../../assets/icons/articles.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import Navbar from './Navbar';

describe('Testing Button React Component', () => {
  test('should be rendere Articulos', () => {
    render(<Navbar icon={ArticlesIcon}>Articulos</Navbar>);
    const buttonElement = screen.getByText(/Articulos/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Inicio', () => {
    render(<Navbar icon={StartIcon}>Inicio</Navbar>);
    const buttonElement = screen.getByText(/Inicio/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Volumenes', () => {
    render(<Navbar icon={VolumesIcon}>Volumenes</Navbar>);
    const buttonElement = screen.getByText(/Volumenes/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

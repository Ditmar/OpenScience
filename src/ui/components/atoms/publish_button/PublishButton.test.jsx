import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublishButton from './PublishButton.tsx';

<<<<<<< HEAD
describe('Testing PublishButton React Component', () => {
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
    console.log(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);

    expect(buttonElement).toHaveClass('buttonPublish__button');
    expect(labelElement).toHaveClass('buttonPublish__label');
=======
describe('Testing Button React Component', () => {
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton >PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('buttonPublish__button');
    // Verificar los estilos específicos
    console.log("-------")
    console.log("Estilos del botón:", buttonElement.style.cssText); // queria comprobar pero no retorna nada

    expect(buttonElement).toHaveStyle({ background: 'rgb(7, 147, 191)' });
    expect(buttonElement).toHaveStyle('border-radius: 1.563rem');

    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);
    expect(labelElement).toHaveClass('buttonPublish__label');
    expect(labelElement).toHaveStyle({ color: 'rgb(255, 255, 255)'});
    expect(labelElement).toHaveStyle('text-transform: uppercase');
>>>>>>> 3e47174 (feature(common):added SEM-040)
  });
});

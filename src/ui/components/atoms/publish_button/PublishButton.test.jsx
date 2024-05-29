import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublishButton from './PublishButton.tsx';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
describe('Testing PublishButton React Component', () => {
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
    console.log(buttonElement);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
describe('Testing PublishButton React Component', () => {
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
=======
>>>>>>> 647d254 (feature(common):added changes per PR comments SEM-040)
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);

    expect(buttonElement).toHaveClass('buttonPublish__button');
    expect(labelElement).toHaveClass('buttonPublish__label');
<<<<<<< HEAD
<<<<<<< HEAD
    expect(labelElement).toHaveStyle({ color: 'rgb(255, 255, 255)'});
    expect(labelElement).toHaveStyle('text-transform: uppercase');
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
>>>>>>> d6e7f28 (feature(common):added SEM-040)
=======
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
=======
describe('Testing Button React Component', () => {
=======
describe('Testing PublishButton React Component', () => {
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
=======
>>>>>>> 89b403a (feature(common):added changes per PR comments SEM-040)
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);

    expect(buttonElement).toHaveClass('buttonPublish__button');
    expect(labelElement).toHaveClass('buttonPublish__label');
<<<<<<< HEAD
<<<<<<< HEAD
    expect(labelElement).toHaveStyle({ color: 'rgb(255, 255, 255)'});
    expect(labelElement).toHaveStyle('text-transform: uppercase');
>>>>>>> 64b0a1d (feature(common):added SEM-040)
=======

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
>>>>>>> 85d6f72 (feature(common):added SEM-040)
=======
>>>>>>> fb4f33d (feature(common):added SEM-040 changes)
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

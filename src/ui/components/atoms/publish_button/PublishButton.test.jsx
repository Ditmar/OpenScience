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
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
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
  });
});

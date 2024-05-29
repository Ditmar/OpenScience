import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublishButton from './PublishButton.tsx';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e3583b0 (feature(common):added SEM-040)
=======
>>>>>>> 172c9d9 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 182f71a3fb35a796eec4ec3751c01a7140e436e6
=======
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
>>>>>>> 76a2ecd (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 797db11 (feat:resolve rebase SEM-040)
=======
>>>>>>> 39c123b (feature(common):added SEM-040)
=======
>>>>>>> d48dd33 (feature(common):added changes per PR comments SEM-040)
describe('Testing PublishButton React Component', () => {
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(buttonElement);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1dcc95d (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 182f71a3fb35a796eec4ec3751c01a7140e436e6
>>>>>>> 256c086 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 61fd5a7 (feature(common):added changes per PR comments SEM-040)
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);
<<<<<<< HEAD
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
>>>>>>> 89b403a (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 797db11 (feat:resolve rebase SEM-040)
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
<<<<<<< HEAD
<<<<<<< HEAD
    expect(labelElement).toHaveStyle({ color: 'rgb(255, 255, 255)'});
    expect(labelElement).toHaveStyle('text-transform: uppercase');
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
=======
    screen.debug();
=======
>>>>>>> fb4f33d (feature(common):added SEM-040 changes)

    expect(buttonElement).toHaveClass('buttonPublish__button');
    expect(labelElement).toHaveClass('buttonPublish__label');
<<<<<<< HEAD
>>>>>>> 85d6f72 (feature(common):added SEM-040)

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
<<<<<<< HEAD
>>>>>>> d6e7f28 (feature(common):added SEM-040)
=======
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
=======
<<<<<<< HEAD
describe('Testing Button React Component', () => {
=======
describe('Testing PublishButton React Component', () => {
<<<<<<< HEAD
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
>>>>>>> d48dd33 (feature(common):added changes per PR comments SEM-040)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 172c9d9 (feature(common):added changes per PR comments SEM-040)
=======
describe('Testing PublishButton React Component', () => {
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
=======
>>>>>>> 647d254 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 61fd5a7 (feature(common):added changes per PR comments SEM-040)
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
>>>>>>> 182f71a3fb35a796eec4ec3751c01a7140e436e6
=======
>>>>>>> 85d6f72 (feature(common):added SEM-040)
<<<<<<< HEAD
>>>>>>> 57ecd38 (feature(common):added SEM-040)
=======
=======
>>>>>>> fb4f33d (feature(common):added SEM-040 changes)
>>>>>>> 841618e (feature(common):added SEM-040 changes)
=======
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
=======
    console.log(buttonElement);
>>>>>>> 6c12ff1 (feature(common):added changes per PR comments SEM-040)
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
<<<<<<< HEAD
>>>>>>> e3583b0 (feature(common):added SEM-040)
=======
=======

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
>>>>>>> d6e7f28 (feature(common):added SEM-040)
<<<<<<< HEAD
>>>>>>> 2bec0d4 (feature(common):added SEM-040)
=======
=======
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
>>>>>>> 2022cd9 (feature(common):added SEM-040 changes)
=======
>>>>>>> 797db11 (feat:resolve rebase SEM-040)
=======
describe('Testing Button React Component', () => {
=======
describe('Testing PublishButton React Component', () => {
>>>>>>> 3a0fa91 (feature(common):added changes per PR comments SEM-040)
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
=======
    console.log(buttonElement);
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
>>>>>>> dbe8bf5 (feature(common):added SEM-040)
=======

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
>>>>>>> ceb65bb (feature(common):added SEM-040)
=======
>>>>>>> 3d4ac0c (feature(common):added SEM-040 changes)
=======
=======
describe('Testing Button React Component', () => {
=======
describe('Testing PublishButton React Component', () => {
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
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
<<<<<<< HEAD
>>>>>>> 39c123b (feature(common):added SEM-040)
=======
=======

    const styles = window.getComputedStyle(labelElement);

    expect(styles.color).toBe('rgb(255, 255, 255)');
>>>>>>> d6e7f28 (feature(common):added SEM-040)
<<<<<<< HEAD
>>>>>>> cc407f0 (feature(common):added SEM-040)
=======
=======
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
>>>>>>> 17142bb (feature(common):added SEM-040 changes)
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

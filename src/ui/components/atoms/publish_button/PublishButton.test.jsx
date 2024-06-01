import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublishButton from './PublishButton.tsx';

describe('Testing PublishButton React Component', () => {
  test('should be rendere PUBLICAR ARTICULO', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByText(/PUBLICAR ARTICULO/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PublishButton>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/PUBLICAR ARTICULO/i);

    expect(buttonElement).toHaveClass('button-publish__button');
    expect(labelElement).toHaveClass('button-publish__label');
  });
});

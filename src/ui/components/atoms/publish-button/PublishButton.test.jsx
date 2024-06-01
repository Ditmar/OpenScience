import { render, screen, fireEvent } from '@testing-library/react';
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

  const createMockFunction = () => {
    const calls = [];
    const mockFunction = (...args) => {
      calls.push(args);
    };
    mockFunction.calls = calls;
    return mockFunction;
  };

  test('should call onClick handler when button is clicked', () => {
    const mockClickHandler = createMockFunction();
    render(<PublishButton onClick={mockClickHandler}>PUBLICAR ARTICULO</PublishButton>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler.calls.length).toBe(1);
  });
});

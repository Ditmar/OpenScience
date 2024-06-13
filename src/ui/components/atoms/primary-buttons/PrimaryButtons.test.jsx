import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimaryButtons from './PrimaryButtons.tsx';

describe('Testing VariableButton React Component', () => {
  test('should be rendere INICIAR SESION', () => {
    render(<PrimaryButtons>INICIAR SESION</PrimaryButtons>);
    const buttonElement = screen.getByText(/INICIAR SESION/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should be rendere REGISTRARSE', () => {
    render(<PrimaryButtons>REGISTRARSE</PrimaryButtons>);
    const buttonElement = screen.getByText(/REGISTRARSE/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<PrimaryButtons>INICiAR SESION</PrimaryButtons>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/INICIAR SESION/i);
    expect(buttonElement).toHaveClass('button-variable__button');
    expect(labelElement).toHaveClass('button-variable__label');
  });

  const createMockFunction = () => {
    const calls = [];
    const mockFunction = (...args) => {
      calls.push(args);
    };
    mockFunction.calls = calls;
    return mockFunction;
  };

  test('should call onClick handler when button is clicked for INICIAR SESION', () => {
    const mockClickHandler = createMockFunction();
    render(<PrimaryButtons onClick={mockClickHandler}>INICIAR SESION</PrimaryButtons>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler.calls.length).toBe(1);
  });
  test('should call onClick handler when button is clicked for REGISTRARSE', () => {
    const mockClickHandler = createMockFunction();
    render(<PrimaryButtons onClick={mockClickHandler}>REGISTRARSE</PrimaryButtons>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler.calls.length).toBe(1);
  });
});

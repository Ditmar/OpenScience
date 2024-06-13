import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import VariableButton from './VariableButton.tsx';

describe('Testing VariableButton React Component', () => {
  test('should be rendere INICIAR SESION', () => {
    render(<VariableButton>INICIAR SESION</VariableButton>);
    const buttonElement = screen.getByText(/INICIAR SESION/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should be rendere REGISTRARSE', () => {
    render(<VariableButton>REGISTRARSE</VariableButton>);
    const buttonElement = screen.getByText(/REGISTRARSE/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('should have correct styles class', () => {
    render(<VariableButton>INICiAR SESION</VariableButton>);
    const buttonElement = screen.getByRole('button');
    const labelElement = screen.getByText(/INICIAR SESION/i);
    expect(buttonElement).toHaveClass('buttons-primary__button');
    expect(labelElement).toHaveClass('buttons-primary__label');
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
    render(<VariableButton onClick={mockClickHandler}>INICIAR SESION</VariableButton>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler.calls.length).toBe(1);
  });
  test('should call onClick handler when button is clicked for REGISTRARSE', () => {
    const mockClickHandler = createMockFunction();
    render(<VariableButton onClick={mockClickHandler}>REGISTRARSE</VariableButton>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler.calls.length).toBe(1);
  });
});


import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton', () => {
  it('renders with label', () => {
    render(<MyButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });


  it('is disabled when disabled prop is true', () => {
    render(<MyButton label="Disabled" disabled />);
    const button = screen.getByText('Disabled') as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });
});


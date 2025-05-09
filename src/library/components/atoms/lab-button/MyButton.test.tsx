import { render, screen } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton', () => {
  it('renders with label', () => {
    render(<MyButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(<MyButton label="Click me" color="primary" />);
    const button = screen.getByRole('button', { name: 'Click me' });
    const styles = getComputedStyle(button).backgroundColor;
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(styles).toBe('rgb(21, 101, 192)');
  });
});

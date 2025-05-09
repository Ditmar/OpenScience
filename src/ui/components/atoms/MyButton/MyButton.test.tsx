import { render, screen } from '@testing-library/react';
import MyButton from './MyButton.tsx';

describe('MyButton', () => {
  it('renders with label', () => {
    render(<MyButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
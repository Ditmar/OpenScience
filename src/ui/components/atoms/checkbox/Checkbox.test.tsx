import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox Atom', () => {
  test('renders checkbox', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('calls onChange handler when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  test('applies aria-label', () => {
    render(<Checkbox ariaLabel="custom checkbox" />);
    const checkbox = screen.getByLabelText('custom checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});

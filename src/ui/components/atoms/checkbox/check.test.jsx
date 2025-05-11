import { render, fireEvent, screen } from '@testing-library/react';
import Check from './check.tsx';

describe('Check component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders unchecked by default', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders checked when prop is true', () => {
    render(<Check checked onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('calls onChange when clicked', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    render(<Check checked={false} onChange={mockOnChange} disabled />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('toggles with space/enter key', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalledWith(true);

    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('applies correct variant class', () => {
    const { rerender } = render(<Check checked onChange={mockOnChange} variant="success" />);
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('check__box--success');

    rerender(<Check checked onChange={mockOnChange} variant="danger" />);
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('check__box--danger');
  });

  it('has proper accessibility attributes', () => {
    render(<Check checked onChange={mockOnChange} disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    expect(checkbox).toHaveAttribute('aria-disabled', 'true');
  });
});
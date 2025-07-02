import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './BaseInput';

vi.mock('../label-input/Label.styles', () => ({
  StyledIcon: ({ iconName, iconSize }: { iconName: string; iconSize: string }) => (
    <div data-testid="icon" data-size={iconSize}>
      {iconName}
    </div>
  ),
}));

describe('Input Component', () => {
  const defaultProps = {
    onChange: vi.fn(),
    placeholder: 'Enter text...',
  };

  it('renders correctly with default props', () => {
    render(<Input onChange={defaultProps.onChange} placeholder={defaultProps.placeholder} />);

    const input = screen.getByPlaceholderText('Enter text...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).not.toBeDisabled();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('displays icon when iconName is provided', () => {
    render(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        iconName="fi-sr-globe"
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('fi-sr-globe');
    expect(icon).toHaveAttribute('data-size', 'medium');
  });

  it('renders disabled state correctly', () => {
    render(
      <Input onChange={defaultProps.onChange} placeholder={defaultProps.placeholder} disabled />,
    );

    const input = screen.getByPlaceholderText('Enter text...');
    expect(input).toBeDisabled();
  });

  it('renders different input types', () => {
    const { rerender } = render(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        type="password"
      />,
    );
    expect(screen.getByPlaceholderText('Enter text...')).toHaveAttribute('type', 'password');

    rerender(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        type="email"
      />,
    );
    expect(screen.getByPlaceholderText('Enter text...')).toHaveAttribute('type', 'email');

    rerender(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        type="number"
      />,
    );
    expect(screen.getByPlaceholderText('Enter text...')).toHaveAttribute('type', 'number');
  });

  it('matches icon size with input size', () => {
    const { rerender } = render(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        iconName="Close-URL"
        size="small"
      />,
    );
    let icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('data-size', 'small');

    rerender(
      <Input
        onChange={defaultProps.onChange}
        placeholder={defaultProps.placeholder}
        iconName="Close-URL"
        size="medium"
      />,
    );
    icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('data-size', 'medium');
  });
});

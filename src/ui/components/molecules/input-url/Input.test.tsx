import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';
import type { UrlInputProps } from './types/IProps';

vi.mock('../../atoms/label-input/Label.styles', () => ({
  StyledIcon: ({ iconName }: { iconName: string }) => (
    <div data-testid="icon" aria-label="icon">
      {iconName}
    </div>
  ),
}));

vi.mock('../../atoms/base-input/BaseInput', () => {
  const BaseInput = vi.fn(
    ({
      onChange,
      disabled,
      value,
      placeholder,
    }: {
      onChange: (value: string) => void;
      disabled?: boolean;
      value?: string;
      placeholder?: string;
    }) => (
      <input
        data-testid="base-input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        aria-label="input"
      />
    ),
  );
  return { Input: BaseInput };
});

vi.mock('../../atoms/Button-Url/Button-Url', () => ({
  ButtonUrl: ({ onClick }: { onClick: () => void }) => (
    <button data-testid="copy-button" onClick={onClick} aria-label="copy button">
      Copy
    </button>
  ),
}));

describe('Input Component', () => {
  const baseProps: UrlInputProps = {
    value: 'example.com',
    onChange: vi.fn(),
    placeholder: 'Enter URL',
    onCopy: vi.fn(),
  };

  it('renders correctly with default props', () => {
    render(
      <Input value={baseProps.value} onChange={baseProps.onChange} onCopy={baseProps.onCopy} />,
    );

    expect(screen.getByTestId('base-input')).toBeInTheDocument();
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
  });

  it('triggers onCopy when button is clicked', () => {
    render(
      <Input value={baseProps.value} onChange={baseProps.onChange} onCopy={baseProps.onCopy} />,
    );
    fireEvent.click(screen.getByRole('button', { name: /copy/i }));
    expect(baseProps.onCopy).toHaveBeenCalled();
  });

  it('disables input when variant is disabled', () => {
    render(<Input value={baseProps.value} onChange={baseProps.onChange} variant="disabled" />);
    expect(screen.getByTestId('base-input')).toBeDisabled();
  });
});

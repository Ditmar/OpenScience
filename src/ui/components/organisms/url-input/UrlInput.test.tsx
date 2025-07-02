import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { UrlInput } from './UrlInput';
import type { URLInputComponentProps } from './types/IProps';

describe('UrlInput Component', () => {
  const baseProps: URLInputComponentProps = {
    value: 'https://example.com',
    onChange: vi.fn(),
    placeholder: 'example.com',
    label: 'Website Address',
    hintText: 'Enter a valid URL',
  };

  let clipboardWriteTextMock = vi.fn().mockResolvedValue(undefined);

  beforeEach(() => {
    vi.clearAllMocks();

    clipboardWriteTextMock = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: clipboardWriteTextMock,
      },
      configurable: true,
    });

    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('renders correctly with default props', () => {
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
      />,
    );

    expect(screen.getByText('Website Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('example.com')).toBeInTheDocument();
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
  });

  it('displays the close button when showCloseButton is true', () => {
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
        showCloseButton
        onClose={vi.fn()}
      />,
    );
    expect(screen.getByRole('button', { name: /cerrar/i })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const mockOnClose = vi.fn();
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
        showCloseButton
        onClose={mockOnClose}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /cerrar/i }));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('handles input changes correctly', () => {
    const mockOnChange = vi.fn();
    render(
      <UrlInput
        value={baseProps.value}
        onChange={mockOnChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
      />,
    );
    const input = screen.getByPlaceholderText('example.com');
    fireEvent.change(input, { target: { value: 'https://new-url.com' } });
    expect(mockOnChange).toHaveBeenCalledWith('https://new-url.com');
  });

  it('handles copy functionality correctly', async () => {
    const mockOnCopy = vi.fn();
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
        onCopy={mockOnCopy}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /copy/i }));
    expect(mockOnCopy).toHaveBeenCalled();
    expect(clipboardWriteTextMock).toHaveBeenCalledWith('https://example.com');
  });

  it('displays error hint text when variant is error', () => {
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
        variant="error"
      />,
    );
    expect(screen.getByText('Enter a valid URL')).toBeInTheDocument();
  });

  it('applies disabled styles when variant is disabled', () => {
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
        variant="disabled"
      />,
    );

    const input = screen.getByPlaceholderText('example.com');
    expect(input).toBeDisabled();

    const copyButton = screen.getByRole('button', { name: /copy/i });
    expect(copyButton).toHaveClass('Mui-disabled');
  });

  it('displays the tooltip button in footer', () => {
    render(
      <UrlInput
        value={baseProps.value}
        onChange={baseProps.onChange}
        placeholder={baseProps.placeholder}
        label={baseProps.label}
        hintText={baseProps.hintText}
      />,
    );
    expect(screen.getByRole('button', { name: /copiar url/i })).toBeInTheDocument();
  });
});

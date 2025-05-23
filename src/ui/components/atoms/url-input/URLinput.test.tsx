import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import URLInput from './URLinput';

describe('URLInput Component', () => {
  it('renders with default props', () => {
    const { getByDisplayValue } = render(<URLInput value="test.com" onChange={() => {}} />);
    expect(getByDisplayValue('test.com')).toBeInTheDocument();
  });

  it('triggers copy action', () => {
    const handleCopy = vi.fn();
    const { getByText } = render(
      <URLInput value="test.com" onChange={() => {}} onCopyClick={handleCopy} />,
    );
    fireEvent.click(getByText('Copy'));
    expect(handleCopy).toHaveBeenCalled();
  });

  it('disables input in disabled state', () => {
    const { getByDisplayValue } = render(
      <URLInput value="test.com" onChange={() => {}} variant="disabled" />,
    );
    expect(getByDisplayValue('test.com')).toBeDisabled();
  });
});

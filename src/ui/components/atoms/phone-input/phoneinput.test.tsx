import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PhoneInput from './phoneinput';

describe('PhoneInput Component', () => {
  it('renders with default props', () => {
    const { getByDisplayValue } = render(<PhoneInput value="5512345678" onChange={() => {}} />);
    expect(getByDisplayValue('5512345678')).toBeInTheDocument();
  });

  it('shows hint text when provided', () => {
    render(
      <PhoneInput
        value=""
        onChange={() => {}}
        hintText="Texto de ayuda"
        showHintText
        variant="default"
      />,
    );
    expect(screen.getByText(/Texto de ayuda/i)).toBeInTheDocument();
  });

  it('disables input in disabled state', () => {
    const { getByDisplayValue } = render(
      <PhoneInput value="5512345678" onChange={() => {}} variant="disabled" />,
    );
    expect(getByDisplayValue('5512345678')).toBeDisabled();
  });

  it('calls onCountryChange when country code is changed', () => {
    const handleChange = vi.fn();
    render(
      <PhoneInput
        value="77778888"
        onChange={() => {}}
        countryCode="+591"
        onCountryChange={handleChange}
      />,
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '+54' } });
    expect(handleChange).toHaveBeenCalledWith('+54');
  });
});

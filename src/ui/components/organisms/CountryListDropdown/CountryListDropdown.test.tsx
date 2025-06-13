import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CountryListDropdown } from './CountryListDropdown';
import type { CountryListDropdownProps, Country } from './types/IProps';

const testCountries: Country[] = [
  { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', dialCode: '+54' },
  { code: 'AF', name: 'Afganistán', flag: 'https://flagcdn.com/w320/af.png', dialCode: '+93' },
  { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/w320/al.png', dialCode: '+355' },
];

if (typeof Element.prototype.scrollIntoView !== 'function') {
  Element.prototype.scrollIntoView = vi.fn();
}

describe('CountryListDropdown Component', () => {
  const headerText = 'Seleccionar País';
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  const renderComponent = (props: Partial<CountryListDropdownProps> = {}) => {
    const defaultProps: CountryListDropdownProps = {
      countries: testCountries,
      onSelectCountry: mockOnSelect,
      headerText,
      ...props,
    };
    return render(
      <CountryListDropdown
        countries={defaultProps.countries}
        onSelectCountry={defaultProps.onSelectCountry}
        headerText={defaultProps.headerText}
        selectedCountry={defaultProps.selectedCountry}
        maxHeight={defaultProps.maxHeight}
        width={defaultProps.width}
      />,
    );
  };

  it('renders the header text correctly', () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: headerText })).toBeInTheDocument();
  });

  it('renders a list of countries', () => {
    renderComponent();
    const listItems = screen.getAllByRole('option');
    expect(listItems).toHaveLength(testCountries.length);
    expect(screen.getByText(/Argentina/)).toBeInTheDocument();
  });

  it('highlights the selected country', () => {
    const selectedCountryCode = testCountries[1].code;
    renderComponent({ selectedCountry: selectedCountryCode });
    const selectedItem = screen.getByRole('option', { name: /Afganistán/i });
    expect(selectedItem).toHaveClass('Mui-selected');
  });

  it('calls onSelectCountry with the correct country code when an item is clicked', () => {
    renderComponent();
    const countryToSelect = testCountries[2];
    const countryItem = screen.getByRole('option', { name: new RegExp(countryToSelect.name, 'i') });
    fireEvent.click(countryItem);
    expect(mockOnSelect).toHaveBeenCalledWith(countryToSelect.code);
  });

  it('navigates with keyboard and selects with Enter', () => {
    renderComponent();
    const list = screen.getByRole('listbox');
    list.focus();
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyDown(document, { key: 'Enter' });

    expect(mockOnSelect).toHaveBeenCalledWith(testCountries[1].code);
  });
});

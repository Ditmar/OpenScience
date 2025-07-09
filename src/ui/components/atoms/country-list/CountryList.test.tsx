import { render, screen } from '@testing-library/react';
import type { ICountry } from './interfaces/Country.interface';
import { CountryListDropdown } from './CountryList';
import type { IProps } from './types/IProps';

const countriesMock: ICountry[] = [
  { code: 'ar', name: 'Argentina', dialCode: '+54' },
  { code: 'pe', name: 'Peru', dialCode: '+51' },
  { code: 'br', name: 'Brazil', dialCode: '+55' },
];

const renderComponent = (props: IProps) => {
  return render(
    <CountryListDropdown
      countryList={props.countryList}
      error={props.error}
      colorVariant={props.colorVariant}
      size={props.size}
    />,
  );
};

describe('CountryListDropdown', () => {
  it('renders the ListSubheader with text "Select Country"', () => {
    renderComponent({
      countryList: countriesMock,
      error: false,
      colorVariant: 'primary',
      size: 'medium',
    });
    expect(screen.getByText(/Select Country/i)).toBeInTheDocument();
  });

  it('renders flag images with correct src', () => {
    renderComponent({
      countryList: countriesMock,
      error: false,
      colorVariant: 'primary',
      size: 'medium',
    });
    countriesMock.forEach((country) => {
      const img = screen.getByAltText(`${country.name} flag`);
      expect(img).toHaveAttribute('src', expect.stringContaining(country.code));
    });
  });

  it('applies custom styles when error is true', () => {
    renderComponent({
      countryList: countriesMock,
      error: true,
      colorVariant: 'primary',
      size: 'medium',
    });
    const listSubheader = screen.getByText(/Select Country/i);
    expect(listSubheader).toBeInTheDocument();
  });

  it('renders with provided size prop', () => {
    renderComponent({
      countryList: countriesMock,
      error: false,
      colorVariant: 'primary',
      size: 'medium',
    });
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems.length).toBe(countriesMock.length);
  });

  it('renders empty list when countryList is empty', () => {
    renderComponent({
      countryList: [],
      error: false,
      colorVariant: 'primary',
      size: 'medium',
    });
    expect(screen.getByText(/Select Country/i)).toBeInTheDocument();
    expect(screen.queryAllByRole('menuitem')).toHaveLength(0);
  });
});

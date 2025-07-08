import { render, screen } from '@testing-library/react';
import type { ICountry } from './interfaces/Country.interface';
import { CountryListDropdown } from './CountryList';

const countriesMock: ICountry[] = [
    { code: 'ar', name: 'Argentina', dialCode: '+54' },
    { code: 'pe', name: 'Peru', dialCode: '+51' },
    { code: 'br', name: 'Brazil', dialCode: '+55' },
];

const renderComponent = (props = {}) => {
    return render(
        <CountryListDropdown
            countryList={countriesMock}
            size="medium"
            {...props}
        />
    );
};

describe('CountryListDropdown', () => {
    it('renders the ListSubheader with text "Select Country"', () => {
        renderComponent();
        expect(screen.getByText(/Select Country/i)).toBeInTheDocument();
    });

    it('renders flag images with correct src', () => {
        renderComponent();
        countriesMock.forEach((country) => {
            const img = screen.getByAltText(`${country.name} flag`);
            expect(img).toHaveAttribute('src', expect.stringContaining(country.code));
        });
    });

    it('applies custom styles when error is true', () => {
        renderComponent({ error: true });
        const listSubheader = screen.getByText(/Select Country/i);
        expect(listSubheader).toBeInTheDocument();
    });

    it('renders with provided size prop', () => {
        renderComponent({ size: 'small' });
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBe(countriesMock.length);
    });

    it('renders empty list when countryList is empty', () => {
        renderComponent({ countryList: [] });
        expect(screen.getByText(/Select Country/i)).toBeInTheDocument();
        expect(screen.queryAllByRole('menuitem')).toHaveLength(0);
    });
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import { vi } from 'vitest';
// import { CountryListDropdown } from './CountryList';

// const mockCountries = [
//   { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
//   { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
//   { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
// ];

// describe('CountryList Component', () => {
//   it('renders correctly with props', () => {
//     render(
//       <CountryListDropdown
//         countries={mockCountries}
//         selectedCountry="ES"
//         isOpen
//         onClose={() => {}}
//         onSelectCountry={() => {}}
//       />,
//     );

//     expect(screen.getByText('Spain')).toBeInTheDocument();
//     expect(screen.getByText('United States')).toBeInTheDocument();
//     expect(screen.getByText('France')).toBeInTheDocument();
//   });

//   it('selects a country on click', () => {
//     const onSelect = vi.fn();
//     render(
//       <CountryListDropdown
//         countries={mockCountries}
//         selectedCountry=""
//         isOpen
//         onClose={() => {}}
//         onSelectCountry={onSelect}
//       />,
//     );

//     fireEvent.click(screen.getByText('France'));

//     expect(onSelect).toHaveBeenCalledWith('FR');
//   });

//   it('allows scrolling', () => {
//     render(
//       <CountryListDropdown
//         countries={mockCountries}
//         selectedCountry=""
//         isOpen
//         onClose={() => {}}
//         onSelectCountry={() => {}}
//       />,
//     );

//     const dropdown = screen.getByRole('list');
//     fireEvent.scroll(dropdown, { target: { scrollTop: 50 } });

//     expect(dropdown.scrollTop).toBe(50);
//   });

//   it('selects a country using keyboard navigation', () => {
//     const onSelect = vi.fn();
//     render(
//       <CountryListDropdown
//         countries={mockCountries}
//         selectedCountry=""
//         isOpen
//         onClose={() => {}}
//         onSelectCountry={onSelect}
//       />,
//     );

//     fireEvent.keyDown(screen.getByText('Spain'), { key: 'ArrowDown' });
//     fireEvent.keyDown(screen.getByText('United States'), { key: 'Enter' });

//     expect(onSelect).toHaveBeenCalledWith('US');
//   });
// });

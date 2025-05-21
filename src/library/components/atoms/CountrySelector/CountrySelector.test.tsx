import { render, screen } from '@testing-library/react';
import CountrySelector from './CountrySelector';
import { getAllCountries } from './countries';

test('renders country selector with label', () => {
  const countries = getAllCountries();
  render(
    <CountrySelector countries={countries} selectedCountry={countries[0]} onChange={() => {}} />,
  );
  expect(screen.getByLabelText(/Select Country/i)).toBeInTheDocument();
});

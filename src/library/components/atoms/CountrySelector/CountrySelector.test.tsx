import { render, screen } from '@testing-library/react';
import CountrySelector from './CountrySelector';
import { countries } from './countries';

test('renders country selector with label', () => {
  render(
    <CountrySelector
      countries={countries}
      selectedCountry={countries[0]}
      onChange={() => {}}
    />
  );
  expect(screen.getByLabelText(/Select Country/i)).toBeInTheDocument();
});

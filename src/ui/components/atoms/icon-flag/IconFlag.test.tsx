import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountryFlag } from './IconFlag';
import { allCountries } from './countryMock';
import styles from './IconFlag.module.scss';

describe('CountryFlag Component', () => {
  test('renders correctly with default props (circular)', () => {
    const testCountry = allCountries[0];
    render(
      <CountryFlag
        src={testCountry.src}
        alt={testCountry.alt}
        name={testCountry.name}
        dialCode={testCountry.dialCode}
        code={testCountry.code}
      />,
    );

    const avatarWrapper = screen.getByAltText(testCountry.alt).closest('div');
    expect(avatarWrapper).toHaveClass(styles['country-flag-avatar']);

    const text = screen.getByText(testCountry.name);
    const dial = screen.getByText(`(${testCountry.dialCode})`);

    expect(text).toBeInTheDocument();
    expect(dial).toBeInTheDocument();
  });

  test('renders rectangular variant correctly', () => {
    const testCountry = allCountries[1];
    render(
      <CountryFlag
        src={testCountry.src}
        alt={testCountry.alt}
        name={testCountry.name}
        dialCode={testCountry.dialCode}
        code={testCountry.code}
        variant="rectangular"
      />,
    );

    const avatarWrapper = screen.getByAltText(testCountry.alt).closest('div');
    expect(avatarWrapper).toHaveClass(styles.rectangular);
  });
});

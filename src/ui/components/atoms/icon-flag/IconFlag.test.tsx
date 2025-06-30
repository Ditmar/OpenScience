import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountryFlag } from './IconFlag';
import { allCountries } from './countryMock';

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

    const avatarImg = screen.getByAltText(testCountry.alt);
    const avatar = avatarImg.parentElement;

    expect(avatar).toBeInTheDocument();
    expect(avatar?.getAttribute('class')).toMatch(/country-flag-avatar--circular/);
    expect(avatar?.getAttribute('class')).toMatch(/country-flag-avatar--medium/);

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

    const avatarImg = screen.getByAltText(testCountry.alt);
    const avatar = avatarImg.parentElement;

    expect(avatar?.getAttribute('class')).toMatch(/country-flag-avatar--rectangular/);
  });
});

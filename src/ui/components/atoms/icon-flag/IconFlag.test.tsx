import React from 'react';
import { renderWithTheme, screen } from '@testing/renderWithTheme';
import '@testing-library/jest-dom';
import { CountryFlag } from './IconFlag';
import { allCountries } from './countryMock';

describe('CountryFlag Component', () => {
  test('renders correctly with default props (circular medium)', () => {
    const testCountry = allCountries[0];
    renderWithTheme(
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
    if (!avatar) {
      throw new Error('Avatar container no encontrado');
    }
    const avatarStyles = window.getComputedStyle(avatar);
    expect(parseInt(avatarStyles.width, 10)).toBeLessThanOrEqual(28);
    expect(parseInt(avatarStyles.height, 10)).toBeLessThanOrEqual(28);
    expect(avatarStyles.borderRadius).toBe('50%');

    const text = screen.getByText(testCountry.name);
    const dial = screen.getByText(`(${testCountry.dialCode})`);
    expect(text).toBeInTheDocument();
    expect(dial).toBeInTheDocument();
    const textStyles = window.getComputedStyle(text);
    expect(textStyles.fontFamily).toMatch(/Poppins/);
    expect(textStyles.fontWeight).toBe('300');
    expect(textStyles.color).toBeDefined();
    const dialStyles = window.getComputedStyle(dial);
    expect(dialStyles.color).toBeDefined();
  });

  test('renders rectangular variant correctly small size', () => {
    const testCountry = allCountries[1];
    renderWithTheme(
      <CountryFlag
        src={testCountry.src}
        alt={testCountry.alt}
        name={testCountry.name}
        dialCode={testCountry.dialCode}
        code={testCountry.code}
        size="small"
        variant="rectangular"
      />,
    );

    const avatarImg = screen.getByAltText(testCountry.alt);
    const avatar = avatarImg.parentElement;
    if (!avatar) {
      throw new Error('Avatar container no encontrado');
    }
    const avatarStyles = window.getComputedStyle(avatar);
    expect(parseInt(avatarStyles.width, 10)).toBeLessThanOrEqual(24);
    expect(parseInt(avatarStyles.height, 10)).toBeLessThanOrEqual(24);
    expect(avatarStyles.borderRadius).toBe('2px');
  });
});

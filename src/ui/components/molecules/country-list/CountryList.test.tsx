import React from 'react';
import { screen, fireEvent, renderWithTheme } from '@testing/renderWithTheme';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { CountryList } from './CountryList';
import { allCountries } from '../../atoms/icon-flag/countryMock';
import type { CountryListProps } from './types/IProps';

describe('CountryList Component', () => {
  const getDefaultProps = (): CountryListProps => ({
    countries: allCountries.slice(0, 5),
    flagVariant: 'circular',
    containerVariant: 'rounded',
    size: 'medium',
    showTitle: true,
    title: 'Select Country',
    titleSize: 'medium',
  });

  test('renders correctly with default props', () => {
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
      />,
    );

    expect(screen.getByText('Select Country')).toBeInTheDocument();
    expect(screen.getByTestId('country-list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  test('renders without title when showTitle is false', () => {
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
        showTitle={false}
      />,
    );

    expect(screen.queryByText('Select Country')).not.toBeInTheDocument();
  });

  test('calls onCountrySelect when a country is clicked', () => {
    const mockOnSelect = vi.fn();
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
        onCountrySelect={mockOnSelect}
      />,
    );

    const firstItem = screen.getByTestId(`country-item-${allCountries[0].code}`);
    fireEvent.click(firstItem);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(allCountries[0]);
  });

  test('applies correct size and flag variant to CountryFlag avatars', () => {
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant="rectangular"
        containerVariant={getDefaultProps().containerVariant}
        size="small"
      />,
    );

    screen.getAllByRole('img').forEach((img) => {
      const parent = img.parentElement;
      if (!parent) throw new Error('Parent element not found');
      const style = window.getComputedStyle(parent);
      expect(parseInt(style.width, 10)).toBeLessThanOrEqual(24);
      expect(parseInt(style.height, 10)).toBeLessThanOrEqual(24);
      expect(style.borderRadius).toBe('2px');
    });
  });

  test('applies correct title size style', () => {
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
        titleSize="large"
      />,
    );
    const titleEl = screen.getByText('Select Country');
    expect(window.getComputedStyle(titleEl).fontSize).toBe('1.5rem');
  });

  test('applies straight container variant style', () => {
    renderWithTheme(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant="straight"
      />,
    );
    const listEl = screen.getByTestId('country-list');
    const container = listEl.parentElement;
    if (!container) {
      throw new Error('Container element not found');
    }
    expect(window.getComputedStyle(container).borderRadius).toBe('0px');
  });
});

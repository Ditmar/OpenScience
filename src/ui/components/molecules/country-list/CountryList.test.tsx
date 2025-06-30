import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { CountryList } from './CountryList';
import { allCountries } from '../../atoms/icon-flag/countryMock';
import type { CountryListProps } from './types/IProps';
import styles from './CountryList.module.scss';

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
    render(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
      />,
    );

    const title = screen.getByText('Select Country');
    expect(title).toBeInTheDocument();

    const list = screen.getByTestId('country-list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(5);
  });

  test('renders without title when showTitle is false', () => {
    render(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
        showTitle={false}
      />,
    );

    const title = screen.queryByText('Select Country');
    expect(title).not.toBeInTheDocument();
  });

  test('calls onCountrySelect when a country is clicked', () => {
    const mockOnSelect = vi.fn();
    render(
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

  test('applies correct size and flag variant to CountryFlag components', () => {
    render(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant="rectangular"
        containerVariant={getDefaultProps().containerVariant}
        size="small"
      />,
    );

    const avatars = screen.getAllByRole('img');
    avatars.forEach((avatar) => {
      const parent = avatar.parentElement;
      expect(parent?.className).toMatch(/country-flag-avatar--small/);
      expect(parent?.className).toMatch(/country-flag-avatar--rectangular/);
    });
  });

  test('applies correct title size class', () => {
    render(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant={getDefaultProps().containerVariant}
        titleSize="large"
      />,
    );
    const title = screen.getByText('Select Country');
    expect(title).toHaveClass(styles['country-list-title--large']);
  });

  test('applies straight container variant', () => {
    render(
      <CountryList
        countries={getDefaultProps().countries}
        flagVariant={getDefaultProps().flagVariant}
        containerVariant="straight"
      />,
    );
    const container = screen.getByTestId('country-list').parentElement;
    expect(container).toHaveClass(styles['country-list-container--straight']);
  });
});

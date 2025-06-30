import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { CountryFlag } from '../../atoms/icon-flag/IconFlag';
import type { CountryListProps } from './types/IProps';
import type { CountryFlagProps } from '../../atoms/icon-flag/types/IProps';
import styles from './CountryList.module.scss';
import { allCountries } from '../../atoms/icon-flag/countryMock';

export function CountryList({
  countries = allCountries,
  onCountrySelect,
  size = 'medium',
  flagVariant = 'circular',
  containerVariant = 'rounded',
  maxHeight = '300px',
  showTitle = true,
  title = 'Select Country',
  titleSize = 'medium',
}: CountryListProps): JSX.Element {
  const handleCountryClick = (country: CountryFlagProps): void => {
    onCountrySelect?.(country);
  };
  const getContainerVariantClass = () => {
    return containerVariant === 'straight'
      ? styles['country-list-container--straight']
      : styles['country-list-container--rounded'];
  };

  return (
    <Box className={`${styles['country-list-container']} ${getContainerVariantClass()}`}>
      {showTitle && (
        <Typography
          variant="h6"
          className={`${styles['country-list-title']} ${
            styles[`country-list-title--${titleSize}`]
          }`}
        >
          {title}
        </Typography>
      )}
      <List className={styles['country-list']} style={{ maxHeight }} data-testid="country-list">
        {countries.map((country) => (
          <ListItem
            key={country.code}
            className={styles['country-list-item']}
            onClick={() => {
              handleCountryClick(country);
            }}
            data-testid={`country-item-${country.code}`}
          >
            <CountryFlag
              src={country.src}
              alt={country.alt}
              name={country.name}
              dialCode={country.dialCode}
              code={country.code}
              size={size}
              variant={flagVariant}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

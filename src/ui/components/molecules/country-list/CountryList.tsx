import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { CountryFlag } from '../../atoms/icon-flag/IconFlag';
import type { CountryListProps } from './types/IProps';
import type { CountryFlagProps } from '../../atoms/icon-flag/types/IProps';
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

  const borderRadius = containerVariant === 'straight' ? '0px' : '8px';

  const titleSizeStyles = {
    small: {
      fontSize: '1rem',
      pt: '16px',
      pb: '8px',
    },
    medium: {
      fontSize: '1.25rem',
      pt: '24px',
      pb: '14px',
    },
    large: {
      fontSize: '1.5rem',
      pt: '32px',
      pb: '20px',
    },
  };

  const titleStyle = titleSizeStyles[titleSize];

  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-white, white)',
        border: '1px solid #E4DAFF',
        boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
        height: '350px',
        maxWidth: '371px',
        width: '100%',
        overflow: 'hidden',
        borderRadius,
        '@media (max-width: 371px)': {
          maxWidth: '100%',
        },
        '@media (max-height: 350px)': {
          height: 'auto',
          maxHeight: '100vh',
        },
      }}
    >
      {showTitle && (
        <Typography
          variant="h6"
          sx={{
            color: 'var(--color-primary-text, #1B2037)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: titleStyle.fontSize,
            pt: titleStyle.pt,
            pb: titleStyle.pb,
            px: '24px',
          }}
        >
          {title}
        </Typography>
      )}

      <List
        sx={{
          overflowY: 'auto',
          maxHeight,
          p: 0,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#1976d2',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#1565c0',
          },
        }}
        data-testid="country-list"
      >
        {countries.map((country) => (
          <ListItem
            key={country.code}
            onClick={() => {
              handleCountryClick(country);
            }}
            data-testid={`country-item-${country.code}`}
            sx={{
              cursor: 'pointer',
              px: '16px',
              py: '8px',
              pr: '50px',
              transition: 'all 0.2s ease',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgb(0 0 0 / 4%)',
              },
              '&:active': {
                backgroundColor: 'var(--color-bg-active)',
                transform: 'scale(0.98)',
              },
            }}
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

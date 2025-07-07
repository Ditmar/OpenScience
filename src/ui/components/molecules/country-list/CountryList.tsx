import React from 'react';
import { Box, List, ListItem, Typography, styled } from '@mui/material';
import { CountryFlag } from '../../atoms/icon-flag/IconFlag';
import type { CountryListProps } from './types/IProps';
import type { CountryFlagProps } from '../../atoms/icon-flag/types/IProps';
import { allCountries } from '../../atoms/icon-flag/countryMock';

const StyledContainer = styled(Box)<{ borderRadius: string }>(({ theme, borderRadius }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
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
}));

const StyledTitle = styled(Typography)<{
  fontSize: string;
  pt: string;
  pb: string;
}>(({ theme, fontSize, pt, pb }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize,
  paddingTop: pt,
  paddingBottom: pb,
  paddingLeft: '24px',
  paddingRight: '24px',
}));

const StyledList = styled(List)<{ maxHeight: string }>(({ theme, maxHeight }) => ({
  overflowY: 'auto',
  maxHeight,
  padding: 0,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.dark,
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  paddingLeft: '16px',
  paddingRight: '50px',
  paddingTop: '8px',
  paddingBottom: '8px',
  transition: 'all 0.2s ease',
  borderRadius: '8px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:active': {
    backgroundColor: theme.palette.action.selected,
    transform: 'scale(0.98)',
  },
}));

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

  const getListMaxHeight = (mh: string | number | undefined): string => {
    if (typeof mh === 'number') {
      return `${String(mh)}px`;
    }
    if (typeof mh === 'string') {
      return mh;
    }
    return '300px';
  };

  return (
    <StyledContainer borderRadius={borderRadius}>
      {showTitle && (
        <StyledTitle
          variant="h6"
          fontSize={titleStyle.fontSize}
          pt={titleStyle.pt}
          pb={titleStyle.pb}
        >
          {title}
        </StyledTitle>
      )}
      <StyledList maxHeight={getListMaxHeight(maxHeight)} data-testid="country-list">
        {countries.map((country) => (
          <StyledListItem
            key={country.code}
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
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

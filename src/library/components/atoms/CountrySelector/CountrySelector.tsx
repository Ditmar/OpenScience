import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { StyledAutocomplete, StyledTextField } from './CountrySelector.styles';
import { getFlagUrl } from './CountrySelector.utils';
import type { CountrySelectorProps } from './CountrySelector.type';

const CountrySelector: React.FC<CountrySelectorProps> = ({
  countries,
  selectedCountry,
  onChange,
  disabled = false,
  error = false,
  helperText = '',
}) => {
  return (
    <StyledAutocomplete
      options={countries}
      getOptionLabel={(option) => (option as CountrySelectorProps['countries'][number]).label}
      value={selectedCountry}
      onChange={(_, newValue) => onChange(newValue as CountrySelectorProps['countries'][number] | null)}
      isOptionEqualToValue={(option, value) =>
        (option as CountrySelectorProps['countries'][number]).code ===
        (value as CountrySelectorProps['countries'][number]).code
      }
      disabled={disabled}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label="Select Country"
          variant="outlined"
          error={error}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            startAdornment: selectedCountry ? (
              <Avatar
                src={getFlagUrl(selectedCountry.code)}
                sx={{ width: 24, height: 24, marginRight: 1 }}
              />
            ) : null,
          }}
        />
      )}
      renderOption={(props, option, state, ownerState) => {
        const country = option as CountrySelectorProps['countries'][number];
        return (
          <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar src={getFlagUrl(country.code)} sx={{ width: 24, height: 24 }} />
            <Typography>{country.label}</Typography>
          </Box>
        );
      }}
    />
  );
};

export default CountrySelector;


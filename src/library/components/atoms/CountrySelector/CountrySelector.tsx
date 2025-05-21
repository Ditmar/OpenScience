import React from 'react';
import { Avatar, Box, Typography, Autocomplete, TextField } from '@mui/material';
import { getFlagUrl } from './CountrySelector.utils';
import type { CountrySelectorProps, Country } from './CountrySelector.type';
import './CountrySelector.scss';

function CountrySelector({
  countries,
  selectedCountry,
  onChange,
  disabled = false,
  error = false,
  helperText = '',
}: CountrySelectorProps) {
  return (
    <div className="country-selector-wrapper">
      <Autocomplete
        options={countries}
        getOptionLabel={(option: Country) => option.label}
        value={selectedCountry}
        onChange={(_, newValue) => {
          onChange(newValue);
        }}
        isOptionEqualToValue={(option: Country, value?: Country) => option.code === value?.code}
        disabled={disabled}
        renderInput={(params) => {
          const { InputProps, ...restParams } = params;
          return (
            <TextField
              {...restParams}
              label="Select Country"
              variant="outlined"
              error={error}
              helperText={helperText}
              InputProps={{
                ...InputProps,
                startAdornment: selectedCountry && (
                  <Avatar
                    src={getFlagUrl(selectedCountry.code)}
                    sx={{ width: 24, height: 24, marginRight: 1 }}
                  />
                ),
              }}
            />
          );
        }}
        renderOption={(props, option: Country) => (
          <Box component="li" {...props} className="country-option">
            <Avatar src={getFlagUrl(option.code)} sx={{ width: 24, height: 24 }} />
            <Typography>{option.label}</Typography>
          </Box>
        )}
      />
    </div>
  );
}

export default CountrySelector;

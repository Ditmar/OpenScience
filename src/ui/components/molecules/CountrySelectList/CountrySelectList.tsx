import React, { forwardRef } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import { CountryFlag } from '../../atoms/CountryFlag/CountryFlag';
import type { Country } from '../../organisms/CountryListDropdown/types/IProps';

interface CountrySelectListProps {
  countries: Country[];
  onSelectCountry: (countryCode: string) => void;
  selectedCountryCode?: string;
  highlightIndex: number;
  headerText?: string;
  maxHeight?: string | number;
}

export const CountrySelectList = forwardRef<HTMLDivElement, CountrySelectListProps>(
  (
    {
      countries,
      onSelectCountry,
      selectedCountryCode,
      highlightIndex,
      headerText,
      maxHeight = 314,
    },
    ref,
  ) => {
    return (
      <Paper
        elevation={3}
        sx={(theme) => ({
          zIndex: 1300,
          width: '100%',
          borderRadius: theme.spacing(1.5),
          backgroundColor: 'background.paper',
          overflow: 'hidden',
        })}
      >
        {headerText && (
          <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>
            {headerText}
          </Typography>
        )}
        <Box
          ref={ref}
          sx={{
            maxHeight,
            overflowY: 'auto',
            '&::-webkit-scrollbar': { width: '8px' },
            '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
            '&::-webkit-scrollbar-thumb': { background: '#8A3FFC', borderRadius: '4px' },
            '&::-webkit-scrollbar-thumb:hover': { background: '#772ce8' },
          }}
        >
          <List dense disablePadding role="presentation">
            {countries.map((country: Country, index: number) => (
              <ListItemButton
                key={country.code}
                selected={selectedCountryCode === country.code}
                onClick={() => {
                  onSelectCountry(country.code);
                }}
                sx={{
                  padding: '12px 16px',
                  '&.Mui-selected': {
                    backgroundColor: 'action.focus',
                    '&:hover': {
                      backgroundColor: 'action.focus',
                    },
                  },
                  ...(highlightIndex === index && { backgroundColor: 'action.hover' }),
                }}
                role="option"
                aria-selected={selectedCountryCode === country.code}
                id={`country-item-${country.code}`}
              >
                <CountryFlag src={country.flag} alt={country.name} />
                <ListItemText primary={`${country.name} (${country.dialCode})`} sx={{ ml: 2 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Paper>
    );
  },
);

CountrySelectList.displayName = 'CountrySelectList';

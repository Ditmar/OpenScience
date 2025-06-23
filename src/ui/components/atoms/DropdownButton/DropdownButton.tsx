import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import { CountryFlag } from '../CountryFlag/CountryFlag';
import type { Country } from '../../organisms/CountryListDropdown/types/IProps';

interface DropdownButtonProps {
  selectedCountry?: Country;
  onClick: () => void;
  isOpen: boolean;
  headerText?: string;
  width?: string | number;
}

export function DropdownButton({
  selectedCountry,
  onClick,
  isOpen,
  headerText = 'Select Country',
  width = '100%',
}: DropdownButtonProps): JSX.Element {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      fullWidth
      endIcon={
        <KeyboardArrowDownIcon
          sx={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      }
      sx={{
        justifyContent: 'space-between',
        textAlign: 'left',
        padding: '14px',
        borderColor: 'divider',
        color: 'text.primary',
        backgroundColor: 'background.paper',
        width,
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'action.hover',
        },
        borderRadius: '8px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      {selectedCountry ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CountryFlag src={selectedCountry.flag} alt={selectedCountry.name} size={20} />
          {selectedCountry.name}
        </Box>
      ) : (
        headerText
      )}
    </Button>
  );
}

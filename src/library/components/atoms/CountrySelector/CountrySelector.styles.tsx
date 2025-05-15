import { styled, TextField, Autocomplete } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: 8,
  },
});

export const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-listbox': {
    maxHeight: 200,
  },
});


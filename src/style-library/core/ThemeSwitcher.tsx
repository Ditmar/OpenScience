import React from 'react';

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from 'style-library/providers/ThemeProvider';

export function ThemeSwitcher() {
  const { toggleTheme } = useTheme();
  const [theme, setTheme] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value);
    toggleTheme(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Theme</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={theme}
        label="Theme"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="NebulaFighterTheme">NebulaFighterTheme</MenuItem>
        <MenuItem value="DarkSpacesTheme">DarkSpacesTheme</MenuItem>
        <MenuItem value="GreenFieldsTheme">GreenFieldsTheme</MenuItem>
      </Select>
    </FormControl>
  );
}

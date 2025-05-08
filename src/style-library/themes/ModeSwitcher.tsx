import { Select, MenuItem } from '@mui/material';
import { useThemeMode } from '../providers/ThemeProvider';

export function ModeSwitcher() {
  const { mode, setMode } = useThemeMode();

  return (
    <Select
      value={mode}
      onChange={(e) => {
        setMode(e.target.value);
      }}
      size="small"
      sx={{ minWidth: 120 }}
    >
      <MenuItem value="light">Claro</MenuItem>
      <MenuItem value="dark">Oscuro</MenuItem>
    </Select>
  );
}

import { Box, ListSubheader, MenuItem } from '@mui/material';
import type { IProps } from './types/IProps';
import { listSubheaderSx, menuItemCointainerSx, menuItemSx } from './CountryList.styles';

export function CountryListDropdown(props: IProps) {
  const { countryList, error, colorVariant, size, borderRadius } = props;

  const menuItemStyles = menuItemSx({ error, size, colorVariant });
  const menuItemContainerStyles = menuItemCointainerSx({ error, size, borderRadius, colorVariant });
  const listSubheaderStyles = listSubheaderSx({ error, size });

  return (
    <Box sx={menuItemContainerStyles}>
      <ListSubheader sx={listSubheaderStyles}>Select Country</ListSubheader>
      {countryList.map((item) => (
        <MenuItem key={item.code} sx={menuItemStyles}>
          <img src={`./images/flags/${item.code}.svg`} alt="" />
          {item.name} ({item.dialCode})
        </MenuItem>
      ))}
    </Box>
  );
}

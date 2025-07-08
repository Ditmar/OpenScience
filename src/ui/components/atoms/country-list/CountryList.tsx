import { ListSubheader, MenuItem } from '@mui/material';
import type { IProps } from './types/IProps';
import { listSubheaderSx, menuItemSx } from './CountryList.styles';

export function CountryListDropdown(props: IProps) {
  const { countryList, error, colorVariant, size } = props;

  const menuItemStyles = menuItemSx({ error, size, colorVariant });
  const listSubheaderStyles = listSubheaderSx();

  return [
    <ListSubheader sx={listSubheaderStyles} key="subheader">
      Select Country
    </ListSubheader>,
    ...countryList.map((item) => (
      <MenuItem key={item.code} value={item.code} sx={menuItemStyles}>
        <img
          src={`./images/flags/${item.code}.svg`}
          alt={`${item.name} flag`}
          style={{ width: '20px', height: '14px', marginRight: '8px' }}
        />
        {item.name} ({item.dialCode})
      </MenuItem>
    )),
  ];
}

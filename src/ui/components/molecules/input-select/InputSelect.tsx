import { Box, type SelectChangeEvent } from "@mui/material";
import type { IProps } from "./types/IProps";
import type { ICountry } from "ui/components/atoms/country-list/interfaces/Country.interface";
import { CountryListDropdown } from "ui/components/atoms/country-list/CountryList";
import { InputSelectBase } from "ui/components/atoms/input-select-base/InputSelectBase";
import { menuPropsSx, paperPropsSx } from "./InputSelect.styles";
import { useState } from "react";

const countryList: ICountry[] = [
  { code: 'ar', name: 'Argentina', dialCode: '+54' },
  { code: 'at', name: 'Austria', dialCode: '+43' },
  { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
  { code: 'be', name: 'Belgium', dialCode: '+32' },
  { code: 'bo', name: 'Bolivia', dialCode: '+591' },
  { code: 'br', name: 'Brazil', dialCode: '+55' },
  { code: 'ca', name: 'Canada', dialCode: '+1' },
  { code: 'cl', name: 'Chile', dialCode: '+56' },
  { code: 'cn', name: 'China', dialCode: '+86' },
  { code: 'co', name: 'Colombia', dialCode: '+57' },
  { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
  { code: 'cu', name: 'Cuba', dialCode: '+53' },
  { code: 'de', name: 'Germany', dialCode: '+49' },
  { code: 'dk', name: 'Denmark', dialCode: '+45' },
  { code: 'eg', name: 'Egypt', dialCode: '+20' },
  { code: 'pe', name: 'Peru', dialCode: '+51' },
];

export function InputSelect(props: IProps) {
  const { error, disabled, borderRadius, borderRadiusMenu, colorVariant, size } = props;
  const [selectedCountry, setSelectedCountry] = useState("ar");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | (Event & { target: { value: unknown; name: string } }),
    child?: React.ReactNode
  ) => {
    setSelectedCountry((event.target as { value: string }).value);
  };

  const inputBaseSize = (size === "small" || size === "medium") ? size : undefined;
  const borderRadiusMenuValue = (borderRadiusMenu === "normal" || borderRadiusMenu === "radius") ? borderRadiusMenu : undefined;

  const menuPropsStyles = menuPropsSx({ error, size, borderRadiusMenu: borderRadiusMenuValue, colorVariant });
  const paperPropsStyles = paperPropsSx({ borderRadiusMenu });

  return (
    <Box sx={{ position: 'relative' }}>
      <InputSelectBase colorVariant={colorVariant} onChange={handleChange} valueSelect={selectedCountry} disabled={disabled} error={error} borderRadius={borderRadius} size={inputBaseSize} MenuProps={{ MenuListProps: { sx: menuPropsStyles }, PaperProps: { sx: paperPropsStyles } }}>
        {CountryListDropdown({
          countryList,
          size,
          error,
          colorVariant,
        })}
      </InputSelectBase>
    </Box>
  );
}
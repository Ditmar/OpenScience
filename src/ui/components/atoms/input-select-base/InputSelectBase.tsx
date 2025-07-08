import { useEffect, useState } from "react";
import { Select } from "@mui/material";
import { selectSx } from "./InputSelectBase.styles";
import type { IProps } from "./types/IProps";

export function InputSelectBase(props: IProps) {
  const { error, disabled, borderRadius, size, children, colorVariant, valueSelect, onChange, ...muiSelectProps } = props;
  const [country, setCountry] = useState('');
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | (Event & { target: { value: unknown; name: string } })
  ) => {
    const value = (event.target as { value: unknown }).value;
    setCountry(typeof value === 'string' ? value : '');
  };

  useEffect(() => {
    const onKey = () => {
      setKeyboardFocus(true);
    };
    const onMouse = () => {
      setKeyboardFocus(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onMouse);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onMouse);
    };
  }, []);

  const selectStyles = selectSx({ disabled, error, borderRadius, size, colorVariant });
  const focusCls = keyboardFocus ? 'keyboard-focus' : 'mouse-focus';

  return (
    <Select
      id="country-select"
      value={valueSelect}
      onChange={onChange}
      displayEmpty
      className={focusCls}
      disabled={disabled}
      inputProps={{ 'aria-label': 'Without label' }}
      sx={selectStyles}
      {...muiSelectProps}
    >
      {children}
    </Select>
  );
}
import type { CheckboxProps } from '@mui/material/Checkbox';

export type MyCheckboxVariant = 'default' | 'success' | 'info' | 'warning' | 'danger';

export interface MyCheckboxProps extends Omit<CheckboxProps, 'color' | 'onChange'> {
  checked?: boolean;
  onChange: (isChecked: boolean) => void;
  disabled?: boolean;
  variant?: MyCheckboxVariant;
}

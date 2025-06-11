import { styled } from '@mui/material/styles';
import Checkbox, { type CheckboxProps } from '@mui/material/Checkbox';
import type { MyCheckboxVariant } from './Types/IProps';

export const muiColorMap: Record<MyCheckboxVariant, CheckboxProps['color']> = {
  default: 'default',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'error',
};

export const StyledCheckbox = styled(Checkbox)<{ customVariant: MyCheckboxVariant }>(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius || 4,
  }),
);

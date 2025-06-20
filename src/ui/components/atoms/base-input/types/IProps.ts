import type { TextFieldProps } from '@mui/material/TextField';
import type { IconName } from 'ui/utils/vite-svgr/types/IProps';

export type BaseInputProps = TextFieldProps & {
  disabled?: boolean;
  iconName?: IconName;
};
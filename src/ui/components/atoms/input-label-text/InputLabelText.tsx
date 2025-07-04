import { Typography } from '@mui/material';
import type { IProps } from './types/IProps';
import { textSx } from './InputLabelText.styles';

export function InputLabelText(props: IProps) {
  const { label, error, disabled, helper, size } = props;

  const labelStyles = textSx({ disabled, error, helper, size });

  return (
    <Typography variant="body1" sx={labelStyles}>
      {label || ''}
    </Typography>
  );
}

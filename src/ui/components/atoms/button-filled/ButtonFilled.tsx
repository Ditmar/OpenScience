import { Button } from '@mui/material';
import type { IProps } from './types/IProps';

import { buttonSx } from './ButtonFilled.styles';

export function ButtonFilled(props: IProps) {
  const {
    text,
    startIcon,
    endIcon,
    borderRadius,
    colorVariant,
    dark,
    disabled,
    size,
    buttonVariant,
  } = props;

  const buttonStyles = buttonSx({
    borderRadius,
    colorVariant,
    dark,
    disabled,
    size,
    buttonVariant,
  });

  return (
    <Button
      sx={buttonStyles}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      data-testid="mui-button"
    >
      {text}
    </Button>
  );
}

import { Box } from '@mui/material';

import { IconMui } from '../../atoms/icon-mui/IconMui';
import { InputLabelText } from '../../atoms/input-label-text/InputLabelText';

import type { IProps } from './types/IProps';

export function InputLabel(props: IProps) {
  const {
    label,
    labelError,
    labelDisabled,
    labelHelper,
    labelSize,
    iconSize,
    leftIcon,
    leftIconError,
    leftIconDisabled,
    rightIcon,
    rightIconError,
    rightIconDisabled,
  } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {leftIcon ? (
          <IconMui
            iconName={leftIcon}
            size={iconSize}
            error={leftIconError}
            disabled={leftIconDisabled}
          />
        ) : null}
        <InputLabelText
          label={label}
          error={labelError}
          disabled={labelDisabled}
          helper={labelHelper}
          size={labelSize}
        />
      </Box>
      <Box>
        {rightIcon ? (
          <IconMui
            iconName={rightIcon}
            size={iconSize}
            error={rightIconError}
            disabled={rightIconDisabled}
          />
        ) : null}
      </Box>
    </Box>
  );
}

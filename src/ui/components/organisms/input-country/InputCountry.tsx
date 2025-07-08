import { Box } from '@mui/material';
import { InputSelect } from '../../molecules/input-select/InputSelect';
import { InputLabel } from '../../molecules/input-label/InputLabel';
import type { IProps } from './types/IProps';

export function InputCountry(props: IProps) {
  const {
    label,
    leftUpperIcon,
    rightUpperIcon,
    leftBottomIcon,
    rightBottomIcon,
    countryList,
    error,
    helperText,
    disabled,
    borderRadius,
    borderRadiusMenu,
    colorVariant,
    size,
  } = props;

  return (
    <Box sx={{ width: 'max-content', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Box>
        <InputLabel
          label={label ?? ''}
          labelDisabled={disabled}
          labelSize={size}
          leftIcon={leftUpperIcon}
          rightIcon={rightUpperIcon}
          rightIconDisabled={disabled}
        />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <InputSelect
          countryList={countryList}
          borderRadius={borderRadius}
          size={size}
          error={error}
          disabled={disabled}
          borderRadiusMenu={borderRadiusMenu}
          colorVariant={colorVariant}
        />
      </Box>
      <Box>
        <InputLabel
          label={helperText ?? ''}
          labelHelper
          labelError={error}
          labelSize={size}
          labelDisabled={disabled}
          leftIcon={leftBottomIcon}
          rightIcon={rightBottomIcon}
          leftIconError={error}
          leftIconDisabled={disabled}
        />
      </Box>
    </Box>
  );
}

import React from 'react';
import { Box, InputBase, IconButton, useTheme, Typography, styled } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import type { PhoneNumberInputProps } from './types/IProps';

const phoneIconUrl = new URL('../../../../assets/icons/fi-rr-phone-flip.svg', import.meta.url).href;

const StyledContainer = styled(Box)({
  width: '100%',
  maxWidth: 371,
});

const StyledInputWrapper = styled(Box)<{
  borderColor: string;
  backgroundColor: string;
  borderRadius: string;
  height: number;
  opacity: number;
  isDisabled: boolean;
  isHover: boolean;
  isFocus: boolean;
}>(({
  borderColor,
  backgroundColor,
  borderRadius,
  height,
  opacity,
  isDisabled,
  isHover,
  isFocus,
  theme,
}) => {
  let resolvedBorderColor = borderColor;
  if (isFocus) {
    resolvedBorderColor = theme.palette.primary.main;
  } else if (isHover && !isDisabled) {
    resolvedBorderColor = theme.palette.primary.main;
  }
  return {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    borderColor: resolvedBorderColor,
    backgroundColor,
    borderRadius,
    height,
    transition: 'all 0.3s ease',
    opacity,
  };
});

const StyledIconButton = styled(IconButton)<{
  borderRadius: string;
  backgroundColor: string;
  customColor: string;
  padding: string;
  minWidth: number;
  borderColor: string;
}>(({ theme, borderRadius, backgroundColor, customColor, padding, minWidth, borderColor }) => ({
  height: '100%',
  borderRadius,
  backgroundColor,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  color: customColor,
  padding,
  minWidth,
  borderRight: '1px solid',
  borderColor,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor,
  },
}));

const StyledFlag = styled('img')<{
  iconSize: number;
}>(({ iconSize }) => ({
  width: iconSize,
  height: iconSize,
  borderRadius: '50%',
  marginRight: 8,
}));

const StyledCountryCode = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, "Poppins-Regular", sans-serif',
  fontWeight: 300,
  color: theme.palette.phonedropdownPalette.textPrimary,
}));

const StyledDropdownBox = styled(Box)({
  position: 'relative',
  width: 14,
  height: 18,
  marginLeft: 8,
});

const StyledArrowUp = styled(ArrowDropUp)<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 14,
  height: 18,
  transition: 'opacity 0.2s ease',
  opacity: isOpen ? 1 : 0,
}));

const StyledArrowDown = styled(ArrowDropDown)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 14,
  height: 18,
  transition: 'opacity 0.2s ease',
  opacity: isOpen ? 0 : 1,
  color: theme.palette.phonedropdownPalette.textPrimary,
}));

const StyledInputBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.text.primary,
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const StyledPhoneIcon = styled('img')<{
  iconSize: number;
  filter: string;
}>(({ iconSize, filter }) => ({
  position: 'absolute',
  left: 16,
  width: iconSize,
  height: iconSize,
  zIndex: 1,
  filter,
}));

const StyledInputBase = styled(InputBase)<{
  inputPadding: string;
  fontSize: string;
}>(({ theme, inputPadding, fontSize }) => ({
  width: '100%',
  height: '100%',
  paddingLeft: inputPadding,
  paddingRight: 16,
  fontFamily: 'Poppins, "Poppins-Regular", sans-serif',
  fontWeight: 300,
  fontSize,
  color: theme.palette.phonedropdownPalette.textPrimary,
  '& input::placeholder': {
    color: theme.palette.text.disabled,
    opacity: 1,
  },
}));

export default function PhoneNumberInput({
  size = 'medium',
  borderRadius = 'rounded',
  state = 'default',
  value = '',
  onChange,
  onCountryButtonClick,
  selectedCountry,
  isOpen = false,
}: PhoneNumberInputProps) {
  const theme = useTheme();
  const countryCode = selectedCountry?.dialCode ? `(${selectedCountry.dialCode})` : '(+54)';
  const countryFlag = selectedCountry?.src ?? 'https://flagcdn.com/w320/ar.png';

  const sizeStyles = {
    small: {
      height: 48,
      fontSize: '0.875rem',
      padding: '12px 16px',
      iconSize: 18,
      inputPadding: '50px',
    },
    medium: {
      height: 52,
      fontSize: '1rem',
      padding: '14px 16px',
      iconSize: 20,
      inputPadding: '52px',
    },
    large: {
      height: 56,
      fontSize: '1.125rem',
      padding: '16px 16px',
      iconSize: 22,
      inputPadding: '54px',
    },
  };

  const stateStyles = {
    default: {
      borderColor: theme.palette.phonedropdownPalette.borderDefault,
      backgroundColor: theme.palette.background.paper,
    },
    hover: {
      borderColor: theme.palette.action.hover,
      backgroundColor: theme.palette.background.paper,
    },
    focus: {
      borderColor: theme.palette.phonedropdownPalette.borderFocus,
      backgroundColor: theme.palette.background.paper,
    },
    error: {
      borderColor: theme.palette.error.main,
      backgroundColor: theme.palette.error.light,
    },
    disabled: {
      borderColor: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
      opacity: 0.6,
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');
    onChange?.(numbersOnly);
  };

  const toggleDropdown = () => {
    if (state !== 'disabled') {
      onCountryButtonClick?.();
    }
  };

  const currentSize = sizeStyles[size];
  const currentState = stateStyles[state];
  const opacity = state === 'disabled' ? 0.6 : 1;
  const borderRadiusValue = borderRadius === 'rounded' ? '8px' : '0';
  const iconButtonBg = isOpen ? theme.palette.phonedropdownPalette.background : 'transparent';
  const iconButtonColor = isOpen
    ? theme.palette.phonedropdownPalette.textTertiary
    : theme.palette.phonedropdownPalette.textPrimary;
  const iconButtonBorderColor = isOpen ? theme.palette.primary.main : currentState.borderColor;
  const phoneIconFilter =
    state === 'disabled'
      ? 'opacity(0.5)'
      : 'brightness(0) saturate(100%) invert(14%) sepia(11%) saturate(2032%) hue-rotate(185deg) brightness(93%) contrast(90%)';

  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <StyledContainer>
      <StyledInputWrapper
        borderColor={currentState.borderColor}
        backgroundColor={currentState.backgroundColor}
        borderRadius={borderRadiusValue}
        height={currentSize.height}
        opacity={opacity}
        isDisabled={state === 'disabled'}
        isHover={isHovered}
        isFocus={isFocused}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      >
        <StyledIconButton
          onClick={toggleDropdown}
          disabled={state === 'disabled'}
          borderRadius={borderRadius === 'rounded' ? '8px 0 0 8px' : '0'}
          backgroundColor={iconButtonBg}
          customColor={iconButtonColor}
          padding={currentSize.padding}
          minWidth={80}
          borderColor={iconButtonBorderColor}
        >
          <StyledFlag src={countryFlag} alt="Flag" iconSize={currentSize.iconSize} />
          <StyledCountryCode variant="body1" style={{ color: iconButtonColor }}>
            {countryCode}
          </StyledCountryCode>
          <StyledDropdownBox>
            <StyledArrowUp isOpen={isOpen} />
            <StyledArrowDown isOpen={isOpen} />
          </StyledDropdownBox>
        </StyledIconButton>
        <StyledInputBox>
          <StyledPhoneIcon
            src={phoneIconUrl}
            alt="Phone icon"
            iconSize={currentSize.iconSize}
            filter={phoneIconFilter}
          />
          <StyledInputBase
            value={value}
            onChange={handleChange}
            placeholder="Phone Number"
            inputMode="numeric"
            disabled={state === 'disabled'}
            inputPadding={currentSize.inputPadding}
            fontSize={currentSize.fontSize}
          />
        </StyledInputBox>
      </StyledInputWrapper>
    </StyledContainer>
  );
}

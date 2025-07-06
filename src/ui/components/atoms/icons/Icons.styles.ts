import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export const backgroundColor: Record<string, (theme: Theme) => string> = {
  blue: (theme) => theme.palette.customBlue.main,
  transparent: () => 'transparent',
};

export const IconContainer = styled('div')<{
  bgcolor: string;
  containerSize: number;
}>(({ bgcolor, containerSize }) => ({
  width: containerSize,
  height: containerSize,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: bgcolor,
}));

export const StyledImg = styled('img')<{
  iconWidth: number;
  iconHeight: number;
}>(({ iconWidth, iconHeight }) => ({
  width: iconWidth,
  height: iconHeight,
}));

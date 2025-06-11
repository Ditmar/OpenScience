import { Typography } from '@mui/material';
import type { TextProps } from './types/IProps';
import './Text.scss';

export function Text({ style, text, bold = 'regular', size = 'medium' }: TextProps) {
  return (
    <Typography
      className={`text text--${size}`}
      fontWeight={bold === 'bold' ? 'bold' : 'normal'}
      style={style}
    >
      {text}
    </Typography>
  );
}

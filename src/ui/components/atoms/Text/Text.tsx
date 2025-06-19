import { Typography } from '@mui/material';
import type { TextProps } from './types/IProps';
import styles from './Text.module.scss';

export function Text({ style, text, bold = 'regular', size = 'medium' }: TextProps) {
  const sizeClass = styles[`text--${size}`];

  return (
    <Typography
      className={`${styles.text} ${sizeClass}`}
      fontWeight={bold === 'bold' ? 'bold' : 'normal'}
      style={style}
    >
      {text}
    </Typography>
  );
}

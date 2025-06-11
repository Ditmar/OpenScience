/** @jsxImportSource @emotion/react */
import { Box } from '@mui/material';
import { getPillStyles } from './pills.module';
import type { IProps } from './types/IProps';

function Pill({
  text,
  ariaLabel,
  variant = 'filled',
  color = 'brand-primary',
  size = 'md',
  rounded = 'r_md',
  icon,
  iconPosition = 'left',
  ...props
}: IProps) {
  const styles = getPillStyles({
    text,
    variant,
    color,
    size,
    rounded,
    iconPosition,
    ...props,
  });

  return (
    <Box sx={styles.root} aria-label={ariaLabel ?? text}>
      {icon && iconPosition === 'left' && <Box sx={styles.icon}>{icon}</Box>}
      <Box sx={styles.content}>{text}</Box>
      {icon && iconPosition === 'right' && <Box sx={styles.icon}>{icon}</Box>}
    </Box>
  );
}

export default Pill;

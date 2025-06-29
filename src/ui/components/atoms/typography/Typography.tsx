import { Typography as MUITypography } from '@mui/material';
import styles from './Typography.module.scss';
import type { TypographyProps } from './types/IProps';

function Typography({
  children,
  variant = 'body1',
  component,
  className,
  fontWeight = 'normal',
  color,
}: TypographyProps) {
  const combinedClassName = [styles.typography, styles[fontWeight], className]
    .filter(Boolean)
    .join(' ')
    .trim();

  return component ? (
    <MUITypography
      variant={variant}
      component={component}
      className={combinedClassName}
      style={{ color }}
    >
      {children}
    </MUITypography>
  ) : (
    <MUITypography variant={variant} className={combinedClassName} style={{ color }}>
      {children}
    </MUITypography>
  );
}

export default Typography;

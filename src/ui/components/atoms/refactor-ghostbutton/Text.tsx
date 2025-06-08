import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

function Text(props: TypographyProps) {
  const {
    children,
    variant,
    color,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    sx,
    display,
    component,
  } = props;

  // Si `component` existe, pásalo; de lo contrario, no lo incluimos
  if (component) {
    return (
      <Typography
        variant={variant}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        sx={sx}
        display={display}
        component={component}
      >
        {children}
      </Typography>
    );
  }

  // Sin `component`
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      sx={sx}
      display={display}
    >
      {children}
    </Typography>
  );
}

export default Text;

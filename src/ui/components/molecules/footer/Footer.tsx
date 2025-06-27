import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

import styles from './Footer.module.scss';
import type { IFooterProps } from './types/IProps';

interface FooterIcon {
  location: string;
  facebook: string;
}

function Footer({
  locationText,
  followUsText,
  size = 'medium',
  icons,
}: IFooterProps & { icons: FooterIcon }) {
  const theme = useTheme();

  const color = theme.palette.text.primary;

  const marginRightMap = {
    small: 0.6,
    medium: 1,
    large: 1.4,
  };

  const marginRight = marginRightMap[size];

  return (
    <div className={classNames(styles.footer, styles[size])} style={{ color }} role="contentinfo">
      <div className={classNames(styles.section, styles[size])}>
        <Typography
          variant="body2"
          component="p"
          color="inherit"
          sx={{
            marginRight,
            fontWeight: 300,
            textTransform: 'uppercase',
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {locationText}
        </Typography>
        <span
          className={styles.icon}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.location }}
        />
      </div>

      <div className={styles.divider} style={{ backgroundColor: color }} />

      <div className={classNames(styles.section, styles[size])}>
        <Typography
          variant="body2"
          component="p"
          color="inherit"
          sx={{
            marginRight,
            fontWeight: 300,
            textTransform: 'uppercase',
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {followUsText}
        </Typography>
        <span
          className={styles.icon}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.facebook }}
        />
      </div>
    </div>
  );
}

export default Footer;

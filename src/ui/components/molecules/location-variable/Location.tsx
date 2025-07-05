import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

import styles from './Location.module.scss';
import type { IFooterProps } from './types/IProps';

import defaultFacebookIcon from '../../../../assets/icons/facelocation.svg?raw';
import defaultLocationIcon from '../../../../assets/icons/location.svg?raw';

function Location({
  locationText,
  followUsText,
  size = 'medium',
  icons = {
    location: defaultLocationIcon,
    facebook: defaultFacebookIcon,
  },
}: IFooterProps) {
  const theme = useTheme();
  const color = theme.palette.text.primary;

  const marginRightMap = {
    small: 0.6,
    medium: 1,
    large: 1.4,
  };

  const marginRight = marginRightMap[size];

  return (
    <div
      className={classNames(styles.location, styles[`location--${size}`])}
      style={{ color }}
      role="contentinfo"
    >
      <div className={styles.location__section}>
        <Typography
          variant="body2"
          component="p"
          color="inherit"
          className={styles.location__text}
          sx={{
            marginRight,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {locationText}
        </Typography>
        <span
          className={styles.location__icon}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.location }}
        />
      </div>

      <div className={styles.location__divider} style={{ backgroundColor: color }} />
      <div className={styles.location__section}>
        <Typography
          variant="body2"
          component="p"
          color="inherit"
          className={styles.location__text}
          sx={{
            marginRight,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {followUsText}
        </Typography>
        <span
          className={styles.location__icon}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.facebook }}
        />
      </div>
    </div>
  );
}

export default Location;

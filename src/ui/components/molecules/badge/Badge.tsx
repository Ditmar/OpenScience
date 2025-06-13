import { Box } from '@mui/material';
import styles from './Badge.module.scss';
import Avatar from '../../atoms/avatar/Avatar';
import Typography from '../../atoms/typography/Typography';
import type { BadgeProps } from './types/IProps';

function Badge({
  avatarUrl,
  avatarAlt = 'Avatar',
  text,
  number,
  color,
  size = 'medium',
  className,
}: BadgeProps) {
  const combinedClassName = [styles.badge, styles[`badge--${size}`], className]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <Box className={combinedClassName} style={{ backgroundColor: color }}>
      {avatarUrl && (
        <Avatar
          src={avatarUrl}
          alt={avatarAlt}
          variant="rounded"
          className={styles.badge__avatar}
        />
      )}
      <Typography variant="body2" className={styles.badge__text}>
        {text}
      </Typography>
      <Box className={styles.badge__number} style={{ backgroundColor: color }}>
        {number}
      </Box>
    </Box>
  );
}

export default Badge;

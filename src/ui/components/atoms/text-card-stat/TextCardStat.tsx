import { Card, CardContent, Typography, Box, Avatar, Checkbox } from '@mui/material';
import styles from './TextCardStat.module.scss';
import type { TextCardStatProps } from './types/IProps';

function TextCardStat({
  badgeText,
  badgeColor,
  badgeNumber = 0,
  badgeAvatarUrl,
  title,
  content,
}: TextCardStatProps) {
  return (
    <Card className={styles['text-card']}>
      <Box className={styles['text-card__header']}>
        <Checkbox
          disableRipple
          icon={<Box className={styles['text-card__checkbox-icon']} />}
          checkedIcon={<Box className={styles['text-card__checkbox-checked-icon']} />}
          className={styles['text-card__checkbox']}
        />

        <Box className={styles['text-card__badge']} style={{ backgroundColor: badgeColor }}>
          {badgeAvatarUrl && (
            <Avatar
              alt="Avatar"
              src={badgeAvatarUrl}
              className={styles['text-card__badge-avatar']}
              variant="rounded"
            />
          )}
          <Typography className={styles['text-card__badge-text']}>{badgeText}</Typography>
          <Box className={styles['text-card__badge-number']} style={{ color: badgeColor }}>
            {badgeNumber}
          </Box>
        </Box>
      </Box>

      <CardContent className={styles['text-card__content']}>
        <Typography variant="h6" gutterBottom className={styles['text-card__content-title']}>
          {title}
        </Typography>
        <Typography variant="body2" className={styles['text-card__content-text']}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TextCardStat;

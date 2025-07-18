import { Card, CardContent, Box } from '@mui/material';
import styles from './TextCardStat.module.scss';
import type { TextCardStatProps } from './types/IProps';
import Typography from '../../atoms/typography/Typography';
import Checkbox from '../../atoms/checkbox/Checkbox';
import Badge from '../../molecules/badge/Badge';

function TextCardStat({
  label,
  badgeColor,
  badgeNumber = 0,
  badgeAvatarUrl,
  badgeAvatarAlt = 'Avatar',
  title,
  description,
  size = 'medium',
  onClick,
  elevation = 1,
  isDisabled = false,
  className,
  checked = false,
  onCheckedChange = () => {},
}: TextCardStatProps) {
  const cardClassName = [
    styles['text-card'],
    isDisabled ? styles['text-card--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <Card
      className={cardClassName}
      onClick={!isDisabled ? onClick : undefined}
      elevation={elevation}
      role={!isDisabled && onClick ? 'button' : undefined}
      tabIndex={!isDisabled && onClick ? 0 : -1}
      onKeyDown={
        !isDisabled && onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <Box className={styles['text-card__header']}>
        <Checkbox checked={checked} onChange={onCheckedChange} aria-label="Select card" />

        <Badge
          avatarUrl={badgeAvatarUrl}
          avatarAlt={badgeAvatarAlt}
          text={label}
          number={badgeNumber}
          color={badgeColor}
          size={size}
        />
      </Box>

      <CardContent className={styles['text-card__content']}>
        <Typography variant="h6" className={styles['text-card__title']}>
          {title}
        </Typography>
        <Typography variant="body2" className={styles['text-card__description']}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TextCardStat;

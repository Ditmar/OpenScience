import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Check from '../../../../ui/components/atoms/check/check';
import styles from './user-text-card.module.scss';
import type { IProps } from './types/IProps';

function UserTextCard(props: IProps) {
  const {
    avatar,
    userName,
    userHandle,
    timestamp,
    content,
    variant = 'default',
    colorVariant = 'default',
    isVerified = false,
    onClick,
    className,
    isChecked,
    onCheckChange,
  } = props;

  const containerClass = [styles.card, styles[variant], styles[colorVariant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClass} data-testid={`user-card-${variant}`}>
      <Check
        checked={isChecked}
        onChange={(value) => {
          onCheckChange?.(value);
          onClick();
        }}
        className={styles.checkbox}
        variant="default"
        shape="square"
      />
      <div className={styles['card__content-wrapper']}>
        {variant !== 'compact' && (
          <Avatar src={avatar} alt="avatar" className={styles.avatar} variant="rounded" />
        )}
        <div className={styles.content}>
          <div className={styles['card__text-container']}>
            <div className={styles.header}>
              <Typography variant="subtitle1" className={styles['header__user-name']}>
                {userName}
              </Typography>
              {isVerified && (
                <Typography variant="body2" className={styles.verified} component="span">
                  ✔️
                </Typography>
              )}
              {userHandle && (
                <Typography variant="body2" className={styles['header__user-handle']}>
                  @{userHandle}
                </Typography>
              )}
            </div>
            <Typography variant="body2" className={styles['user-text-card__message-text']}>
              {content}
            </Typography>
          </div>
          {timestamp && (
            <div className={styles.timestamp}>
              {typeof timestamp === 'string' ? timestamp : timestamp.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserTextCard;

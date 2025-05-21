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
    isVerified = false,
    onClick,
    className,
    isChecked = false,
    onCheckChange,
  } = props;
  const containerClass = [styles.card, styles[variant], className].filter(Boolean).join(' ');

  return (
    <div className={containerClass} data-testid={`user-card-${variant}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          e.stopPropagation();
          onCheckChange?.(e.target.checked);
          onClick();
        }}
        className={styles.checkbox}
      />

      <div className={styles['card__content-wrapper']}>
        {variant !== 'compact' && (
          <div className={styles.avatar}>
            {typeof avatar === 'string' ? <img src={avatar} alt="avatar" /> : avatar}
          </div>
        )}
        <div className={styles.content}>
          <div className={styles['card__text-container']}>
            <div className={styles.header}>
              <span className={styles['header__user-name']}>{userName}</span>
              {isVerified && <span className={styles.verified}>✔️</span>}
              {userHandle && <span className={styles['header__user-handle']}>@{userHandle}</span>}
            </div>
            <div className={styles.message}>
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
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

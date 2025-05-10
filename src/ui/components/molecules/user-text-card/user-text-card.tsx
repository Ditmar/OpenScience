import styles from './user-text-card.module.scss';
import type { IProps } from './types/IProps';

function UserTextCard(props: IProps) {
  const {
    avatar,
    userName,
    userHandle,
    timestamp,
    content,
    actions,
    variant = 'default',
    isVerified = false,
    onClick,
    className,
    isChecked = false,
    onCheckChange,
  } = props;

  return (
    <div className={[styles.card, styles[variant], className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          e.stopPropagation();
          onCheckChange?.(e.target.checked);
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
            <div
              className={styles.message}
              onClick={onClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onClick?.();
                }
              }}
            >
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
          </div>

          {timestamp && (
            <div className={styles.timestamp}>
              {typeof timestamp === 'string' ? timestamp : timestamp.toLocaleString()}
            </div>
          )}

          {variant === 'expanded' && actions && (
            <div className={styles.actions}>
              {actions.map((action, i) => (
                <button
                  key={action.label || i}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserTextCard;

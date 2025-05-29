import React from 'react';
import styles from './UserTextStat.module.scss';
import type { UserTextStatProps } from './types/IProps';

const variantClasses = {
  default: styles.default,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

const sizeClasses = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const iconMap = {
  default: (
    <span role="img" aria-label="info">
      ℹ️
    </span>
  ),
  success: (
    <span role="img" aria-label="check">
      ✅
    </span>
  ),
  warning: (
    <span role="img" aria-label="warning">
      ⚠️
    </span>
  ),
  error: (
    <span role="img" aria-label="error">
      ❌
    </span>
  ),
};

function UserTextStat({
  title,
  mainValue,
  subValue,
  variant = 'default',
  size = 'medium',
  icon,
  description,
  onClick,
  className,
  avatarUrl,
  showCheckbox,
}: UserTextStatProps): JSX.Element {
  const classNames = [
    styles.userTextStatCard,
    variantClasses[variant],
    sizeClasses[size],
    className ?? '',
  ].join(' ');

  const Content = (
    <div className={styles.userTextStatCard}>
      {showCheckbox && <input type="checkbox" className={styles.checkbox} />}
      {avatarUrl && <img src={avatarUrl} alt="Avatar" className={styles.avatar} />}
      <div className={styles.content}>
        <div className={styles.user}>
          {!avatarUrl && (icon ?? iconMap[variant])}
          <span style={{ marginLeft: !avatarUrl ? '0.5rem' : '0' }}>{title}</span>
        </div>
        <div className={styles.text}>{mainValue}</div>
        {subValue != null && <div className={styles.timestamp}>{subValue}</div>}
        {description && <div className={styles.text}>{description}</div>}
      </div>
    </div>
  );

  return onClick ? (
    <button
      type="button"
      onClick={onClick}
      className={classNames}
      style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0 }}
    >
      {Content}
    </button>
  ) : (
    <div className={classNames}>{Content}</div>
  );
}

export default UserTextStat;

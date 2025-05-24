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
}: UserTextStatProps): JSX.Element {
  const classNames = `${styles.userTextStatCard} ${variantClasses[variant]} ${sizeClasses[size]} ${
    className ?? ''
  }`;

  const Content = (
    <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
      <div>{icon ?? iconMap[variant]}</div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.mainValue}>{mainValue}</div>
        {subValue && <div className={styles.subValue}>{subValue}</div>}
        {description && <div className={styles.description}>{description}</div>}
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

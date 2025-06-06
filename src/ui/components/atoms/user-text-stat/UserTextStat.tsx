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
  styleVariant = 'white',
}: UserTextStatProps): JSX.Element {
  const styleVariantClass = styles[styleVariant] ?? '';

  const classNames = [
    styles['user-text-stat'],
    styleVariantClass,
    variantClasses[variant],
    sizeClasses[size],
    className ?? '',
  ].join(' ');

  const Content = (
    <>
      {showCheckbox && <input type="checkbox" className={styles.checkbox} />}
      {avatarUrl && <img src={avatarUrl} alt="Avatar" className={styles.avatar} />}
      <div className={styles.content}>
        <div className={styles.user}>
          {icon && !avatarUrl && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
          <span>{title}</span>
        </div>
        <div className={styles.text}>{mainValue}</div>
        {subValue && <div className={styles.timestamp}>{subValue}</div>}
        {description && <div className={styles.text}>{description}</div>}
      </div>
    </>
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

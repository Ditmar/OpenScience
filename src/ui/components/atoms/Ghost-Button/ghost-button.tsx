import classNames from 'classnames';
import styles from './styles.module.scss';
import type { GhostButtonProps } from './types/types';
import { Icon } from '../../../utils/svg-icons/icons';
import Circlex from '../../../../assets/icons/circle-quarters.svg?raw';

function GhostButton({
  ghostbutton,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}: GhostButtonProps) {
  const buttonClass = classNames(
    styles['ghost-button'],
    styles[`ghost-button--${size}`],
    {
      [styles.primary]: variant === 'primary',
      [styles['ghost-button--dark']]: variant === 'dark',
      [styles['ghost-button--intenseviolet']]: variant === 'intenseviolet',
      [styles['ghost-button--violet']]: variant === 'violet',
      [styles['ghost-button--teritary']]: variant === 'teritary',
      [styles['ghost-button--green']]: variant === 'green',
      [styles['ghost-button--red']]: variant === 'red',
      [styles['ghost-button--yellow']]: variant === 'yellow',
    },
    {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
    },
    {
      [styles['ghost-button--disabled']]: disabled,
    },
  );

  return (
    <button
      data-testid="ghost-button"
      className={buttonClass}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Icon src={Circlex} className={styles['ghost-button__icon']} size="24px" />
      &nbsp;
      {ghostbutton}
      &nbsp;
      <Icon src={Circlex} className={styles['ghost-button__icon']} size="24px" />
    </button>
  );
}

export default GhostButton;

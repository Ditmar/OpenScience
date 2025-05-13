import classNames from 'classnames';
import styles from './styles.module.scss';
import type { GhostButtonProps } from './types/types';
import Circlex from '../../../../assets/icons/Circlex.svg?raw';

function GhostButton({
  ghostbutton,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  withIcon = false,
}: GhostButtonProps) {
  const buttonClass = classNames(
    styles['ghost-button'],
    styles[`ghost-button--${size}`],
    {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles['ghost-button--dark']]: variant === 'dark',
      [styles['ghost-button--violetaintenso']]: variant === 'violetaintenso',
       [styles['ghost-button--violeta']]: variant === 'violeta',
       [styles['ghost-button--teritary']]: variant === 'teritary',
       [styles['ghost-button--verde']]: variant === 'verde',
       [styles['ghost-button--rojo']]: variant === 'rojo',
       [styles['ghost-button--amarillo']]: variant === 'amarillo',

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
      
         <span className={styles['ghost-button__icon']} dangerouslySetInnerHTML={{ __html: Circlex }} />
       &nbsp;
      {ghostbutton}
      &nbsp;
        <span className={styles['ghost-button__icon']} dangerouslySetInnerHTML={{ __html: Circlex }} />

    </button>
  );
}

export default GhostButton;
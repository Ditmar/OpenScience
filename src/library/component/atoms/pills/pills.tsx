import styles from './pills.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../../ui/utils/svg-icons/icons';

function Pill(props: IProps) {
  const {
    text,
    color,
    variant,
    size,
    rounded,
    icon,
    ariaLabel,
    shadow,
    stroke,
    iconPosition = 'left',
  } = props;
  const variantColor = variant && color ? `${variant}-${color}` : null;
  const roundedClass = rounded ? `r-${rounded.split('_')[1]}` : null;
  const pillClass = [
    styles.pill,
    size && styles[`pill--${size}`],
    variantColor && styles[`pill--${variantColor}`],
    roundedClass && styles[`pill--${roundedClass}`],
    stroke && color && styles[`pill--${stroke}-${color}`],
    shadow && styles['pill--shadow'],
    icon && styles[`pill--icon-${iconPosition}`],
  ]
    .filter(Boolean)
    .join(' ');

  const iconClass = styles.pill__icon;

  return (
    <div>
      <span className={pillClass} role="status" aria-label={ariaLabel}>
        {icon && iconPosition !== 'right' && (
          <span className={iconClass} aria-hidden="true" data-testid="custom-icon">
            {typeof icon === 'string' ? <Icon src={icon} size="1em" className={iconClass} /> : icon}
          </span>
        )}

        {text}

        {icon && iconPosition === 'right' && (
          <span className={iconClass} aria-hidden="true" data-testid="custom-icon">
            {typeof icon === 'string' ? <Icon src={icon} size="1em" className={iconClass} /> : icon}
          </span>
        )}
      </span>
    </div>
  );
}
export default Pill;

import styles from './Pills.module.scss';
import type { IProps } from './types/IProps';

function Pill(props: IProps) {
  const { text, color, variant, size, rounded, icon, ariaLabel, shadow, stroke } = props;
  const variantColor = variant && color ? `${variant}-${color}` : null;
  const roundedClass = rounded ? `r-${rounded.split('_')[1]}` : null;
  const pillClass = [
    styles.pill,
    size && styles[`pill--${size}`],
    variantColor && styles[`pill--${variantColor}`],
    roundedClass && styles[`pill--${roundedClass}`],
    stroke && styles[`pill--${stroke}-neutral-light`], // ojo: puedes ajustar el color base
    shadow && styles['pill--shadow'],
  ]
    .filter(Boolean)
    .join(' ');

  const iconClass = styles.pill__icon;

  return (
    <div>
      <span className={pillClass} role="status" aria-label={ariaLabel}>
        {icon && (
          <span className={iconClass} aria-hidden="true" data-testid="custom-icon">
            {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
          </span>
        )}
        {text}
      </span>
    </div>
  );
}

export default Pill;

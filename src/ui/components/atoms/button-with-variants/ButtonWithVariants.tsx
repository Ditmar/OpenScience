import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonWithVariants({ icon, size = 'medium', color = 'default', disabled = false, onClick }: IProps) {
  const sizeClass = `button--${size}`;
  const colorClass = `button--${color}`;
  const classes = `button ${sizeClass} ${colorClass}`;

  return (
    <button className={classes} aria-label="icon button" disabled={disabled} onClick={onClick}>
      {icon && (
        <span
          data-testid="button__icon"
          className="button__icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
    </button>
  );
}

export default ButtonWithVariants;

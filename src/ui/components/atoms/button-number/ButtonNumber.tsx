import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './ButtonNumber.module.scss';
import type { IProps } from './types/IProps';

function ButtonNumber({
  children,
  variant = 'filled',
  shape = 'square',
  size = 'medium',
  inactive = false,
  selected = false,
}: IProps) {
  return (
    <button
      className={` 
        ${styles['button-number']}
        ${styles[`button-number--${variant}`]} 
        ${styles[`button-number--${shape}`]} 
        ${styles[`button-number--${size}`]}
        ${inactive ? styles['button-number--inactive'] : ''}
      `}
      disabled={inactive}
    >
      {selected && (
        <CheckCircleIcon
          data-testid="logo_icon"
          className={`
            ${styles['button-number__icon']}
          `}
        />
      )}
      {children}
    </button>
  );
}

export default ButtonNumber;

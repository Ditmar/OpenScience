import styles from './URLinput.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';
import PlanetIcon from '../../../../assets/icons/fi-sr-globe.svg?raw';
import CloseIcon from '../../../../assets/icons/Close-URL.svg?raw';
import CopyIcon from '../../../../assets/icons/fi-rr-copy.svg?raw';
import InfoIcon from '../../../../assets/icons/Info-Tooltip.svg?raw';

function URLInput(props: IProps) {
  const {
    value,
    onChange,
    placeholder = 'example.com',
    variant = 'default',
    size = 'medium',
    borderRadius = 'small',
    label = 'Website Address',
    showCloseIcon = true,
    onCloseClick,
    onCopyClick,
    showHintText = true,
    hintText = 'Hint Text',
    className = '',
  } = props;

  const containerClasses = [
    styles.container,
    styles[`variant--${variant}`],
    styles[`size--${size}`],
    styles[`radius--${borderRadius}`],
    className,
  ].join(' ');

  return (
    <div className={containerClasses}>
      <div className={styles.header}>
        <div className={styles['label-wrapper']}>
          <Icon src={PlanetIcon} className={styles['label-icon']} />
          <span className={styles['label-text']}>{label}</span>
        </div>
        <Icon src={CloseIcon} className={styles['close-icon-url']} />
      </div>
      <div className={styles['input-container']}>
        <div className={styles['input-wrapper']}>
          <Icon src={PlanetIcon} className={styles['planet-icon']} />
          <span className={styles.protocol}>https://</span>
          <span className={styles.divider}>|</span>
          <div className={styles['input-group']}>
            <Icon src={PlanetIcon} className={styles['input-icon']} />
            <input
              type="text"
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              disabled={variant === 'disabled'}
              className={styles.input}
            />
          </div>

          <button
            className={styles['copy-button']}
            onClick={onCopyClick}
            disabled={variant === 'disabled'}
          >
            <Icon src={CopyIcon} className={styles['copy-icon']} />
            <span>Copy</span>
          </button>

          {showCloseIcon && (
            <button aria-label="Cerrar" className={styles['close-button']} onClick={onCloseClick}>
              <Icon src={CloseIcon} className={styles['close-icon-url']} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        {showHintText && (
          <div className={styles['hint-text']}>
            <Icon src={InfoIcon} className={styles['info-icon']} />
            <span className={styles['hint-text']}>{hintText}</span>
          </div>
        )}
        <Icon src={InfoIcon} className={styles['standalone-info-icon']} />
      </div>
    </div>
  );
}

export default URLInput;

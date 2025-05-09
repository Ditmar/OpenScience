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
        <div className={styles.labelWrapper}>
          <Icon src={PlanetIcon} className={styles.labelIcon} />
          <span className={styles.labelText}>{label}</span>
        </div>
        <Icon src={CloseIcon} className={styles.closeIconURl} />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <Icon src={PlanetIcon} className={styles.planetIcon} />
          <span className={styles.protocol}>https://</span>
          <span className={styles.divider}>|</span>
          <div className={styles.inputGroup}>
            <Icon src={PlanetIcon} className={styles.inputIcon} />
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
            className={styles.copyButton}
            onClick={onCopyClick}
            disabled={variant === 'disabled'}
          >
            <Icon src={CopyIcon} className={styles.copyIcon} />
            <span>Copy</span>
          </button>

          {showCloseIcon && (
            <button aria-label="Cerrar" className={styles.closeButton} onClick={onCloseClick}>
              <Icon src={CloseIcon} className={styles.closeIcon} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        {showHintText && (
          <div className={styles.hintText}>
            <Icon src={InfoIcon} className={styles.infoIcon} />
            <span className={styles.hintText}>{hintText}</span>
          </div>
        )}
        <Icon src={InfoIcon} className={styles.standaloneInfoIcon} />
      </div>
    </div>
  );
}

export default URLInput;

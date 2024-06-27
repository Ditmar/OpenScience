import styles from './CloseDownloadButton.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function CloseDownloadButton(props: IProps) {
  const { icon, onClick, color } = props;
  const colorFont = styles[color as keyof typeof styles];

  return (
    <button
      className={`${styles['close-download-button']} ${colorFont}`}
      aria-label="Abrir"
      onClick={onClick}
    >
      {icon && <Icon data-testid="button-icon" src={icon} className={styles.buttonIcon} />}
    </button>
  );
}
export default CloseDownloadButton;

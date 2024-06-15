import './CloseDownloadButton.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function CloseDownloadButton(props: IProps) {
  const { icon, onClick, color } = props;
  const colorFont = `button__icon--${color as string}`;
  return (
    <button className={`close-download-button ${colorFont}`} aria-label="Abrir" onClick={onClick}>
      {icon && <Icon data-testid="button-icon" src={icon} className="button__icon" />}
    </button>
  );
}
export default CloseDownloadButton;

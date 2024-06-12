import './style.scss';
import type { IProps } from './types/IProps';

function CloseDownloadButton(props: IProps) {
  const { icon, onClick } = props;
  return (
    <button className="close-download-button" aria-label="Abrir" onClick={onClick}>
      <span
        className="button__icon"
        data-testid="button-icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}
export default CloseDownloadButton;

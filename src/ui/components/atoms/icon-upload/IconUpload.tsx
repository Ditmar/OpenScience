import './IconUpload.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function IconUpload(props: IProps) {
  const { icon, onClick } = props;

  return (
    <button className="variable__upload" aria-label="Subir articulo" onClick={onClick}>
      {icon && <Icon data-testid="upload__icon" src={icon} className="upload__icon" />}
    </button>
  );
}

export default IconUpload;

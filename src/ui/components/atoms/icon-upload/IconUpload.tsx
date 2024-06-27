import styles from './IconUpload.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function IconUpload(props: IProps) {
  const { icon, onClick } = props;

  return (
    <button className={styles['icon-upload__button']} aria-label="Subir articulo" onClick={onClick}>
      {icon && (
        <Icon data-testid="icon-upload__icon" src={icon} className={styles['icon-upload__icon']} />
      )}
    </button>
  );
}

export default IconUpload;

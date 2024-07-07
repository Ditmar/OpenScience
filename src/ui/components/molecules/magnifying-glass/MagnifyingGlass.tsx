import './style.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function MagnifyingGlass(props: IProps) {
  const { icon, onClick } = props;

  return (
    <div className="glass">
      <button onClick={onClick} className="disguise" aria-label="icon">
        {icon && <Icon data-testid="button__glass" src={icon} className="button__icons--glass" />}
      </button>
    </div>
  );
}
export default MagnifyingGlass;

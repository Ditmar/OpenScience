import './IconButton.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function IconButton(props: IProps) {
  const { icon, color } = props;
  const colorFont = `logo--${color as string}`;
  return (
    <button className={`button__share ${colorFont}`} aria-label="icon">
      {icon && <Icon data-testid="button__icon" src={icon} className="button__icons" />}
    </button>
  );
}
export default IconButton;

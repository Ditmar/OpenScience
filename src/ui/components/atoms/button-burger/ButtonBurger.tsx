import './ButtonBurger.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function ButtonBurger({ variant = 'main', icon, color, onClick }: IProps) {
  const colorFont = `logo--${color as string}`;
  return (
    <button
      className={`button-burger button-burger--${variant}`}
      aria-label="Menu"
      onClick={onClick}
    >
      <div className={`logo ${colorFont}`}>
        {icon && <Icon data-testid="button-icon" src={icon} className="button-icon" />}
      </div>
    </button>
  );
}
export default ButtonBurger;

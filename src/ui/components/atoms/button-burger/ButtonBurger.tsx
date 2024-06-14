import './ButtonBurger.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function ButtonBurger({ icon, color, onClick }: IProps) {
  const colorFont = `button-icon--${color as string}`;
  return (
    <button className={`button-burger ${colorFont}`} aria-label="Menu" onClick={onClick}>
      {icon && <Icon data-testid="button-icon" src={icon} className="button-icon" />}
    </button>
  );
}
export default ButtonBurger;

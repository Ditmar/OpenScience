import './MultiFunctionButton.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function MultiFunctionButton(props: IProps) {
  const { icon, onClick, color = 'primary' } = props;
  const colorFont = `variable__button--${color as string}`;
  return (
    <button className={`variable__button ${colorFont}`} aria-label="Abrir" onClick={onClick}>
      {icon && <Icon data-testid="button-icon" src={icon} className="button__icon" />}
    </button>
  );
}

export default MultiFunctionButton;

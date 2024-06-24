import './StartButton.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function StartButton(props: IProps) {
  const { children, icon, variant = 'primary' } = props;

  return (
    <button className={`start__button start__button--${variant}`}>
      <span className="start__button-text">{children}</span>
      {icon && <Icon src={icon} className="start__button-icon" />}
    </button>
  );
}

export default StartButton;

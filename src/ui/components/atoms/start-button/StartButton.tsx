import './StartButton.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function StartButton(props: IProps) {
  const { children, icon, variant = 'primary' } = props;

  return (
    <div className="start__button-container">
      <button className={`start__button start__button--${variant}`}>
        {children}
        {icon && <Icon src={icon} className="start__button-icon" />}
      </button>
    </div>
  );
}

export default StartButton;

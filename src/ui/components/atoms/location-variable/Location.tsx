import './styles.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function Location(props: IProps) {
  const { variant, children, icon, icon1, children1 } = props;
  return (
    <div className="location">
      <span className="location__label">{children}</span>
      <button className="location__icon" aria-label="icon">
        {icon && <Icon data-testid="location__button" src={icon} />}
      </button>
      <hr className={`divider--${variant}`} />
      <span className="location__label1">{children1}</span>
      <button className="location__icon1" aria-label="icon">
        {icon1 && <Icon data-testid="location__button1" src={icon1} />}
      </button>
    </div>
  );
}
export default Location;

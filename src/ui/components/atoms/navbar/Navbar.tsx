import './styles.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function Button(props: IProps) {
  const { children, icon } = props;
  return (
    <div className="container">
      <button className="component">
        {icon && <Icon src={icon} className="navbar__icon" />}
        <span className="component__label">{children}</span>
      </button>
    </div>
  );
}
export default Button;

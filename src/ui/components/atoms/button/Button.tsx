import './Button.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function Button(props: IProps) {
  const { children, icon, color } = props;
  const colorFont = `button--${color as string}`;
  return (
    <button className="button__label">
      <div className={`button ${colorFont}`}>
        {icon && <Icon src={icon} className="button__icon" />}
      </div>
      <span className="button__text">{children}</span>
    </button>
  );
}
export default Button;

import './styles.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function LogoFooter(props: IProps) {
  const { icon, color } = props;
  const colorFont = `logo--${color as string}`;

  return (
    <div className={`logo ${colorFont}`}>
      {icon && <Icon data-testid="logo_icon" src={icon} className="logo-icon" />}
    </div>
  );
}
export default LogoFooter;

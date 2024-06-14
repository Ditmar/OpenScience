import './styles.scss';
// eslint-disable-next-line import/no-unresolved
import { Icon } from 'ui/utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function LogoFooter(props: IProps) {
  const { icon, color } = props;
  const colorFont = `logo--${color as string}`;

  return (
    <div className={`logo ${colorFont}`}>{icon && <Icon src={icon} className="logo-icon" />}</div>
  );
}
export default LogoFooter;

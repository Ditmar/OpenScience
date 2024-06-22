import './styles.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function VariableLocationFollowUs(props: IProps) {
  const { text, icon, url, divider } = props;
  return (
    <div className="location">
      <a href={url}>{text} </a>
      {icon && <Icon data-testid="link-icon" src={icon} className="link__icon" />}
      <span className="divider">{divider}</span>
    </div>
  );
}

export default VariableLocationFollowUs;

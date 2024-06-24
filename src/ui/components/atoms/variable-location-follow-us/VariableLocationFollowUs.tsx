import './styles.scss';
import type { IProps } from './types/IProps';
import urls from './_mocked/references.json';
import { Icon } from '../../../utils/svg-icons/icons';

interface Urls {
  locationUrl: string;
  facebookUrl: string;
}
function VariableLocationFollowUs(props: IProps) {
  const { iconlocation, iconfacebook, divider } = props;
  const referenceUrls: Urls = urls as Urls;
  return (
    <div className="location">
      <a href={referenceUrls.locationUrl}> UBICACION </a>
      {iconlocation && <Icon data-testid="link-icon" src={iconlocation} className="link__icon" />}
      <span className="divider">{divider}</span>
      <a href={referenceUrls.facebookUrl}> SIGUENOS EN </a>
      {iconfacebook && <Icon data-testid="link_icon" src={iconfacebook} className="link__icon" />}
    </div>
  );
}

export default VariableLocationFollowUs;

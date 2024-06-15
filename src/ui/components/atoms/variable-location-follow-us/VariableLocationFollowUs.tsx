import './styles.scss';
import type { IProps } from './types/IProps';

function VariableLocationFollowUs(props: IProps) {
  const { label, label1, iconlocation, iconfacebook, urllocation, urlfacebok, pathImage, alt } =
    props;
  return (
    <div className="location">
      <a href={urllocation}>{label} </a>
      <span
        className="link__icon"
        data-testid="link-icon"
        dangerouslySetInnerHTML={{ __html: iconlocation ?? '<div></div>' }}
      />
      <img src={pathImage} alt={alt} />
      <a href={urlfacebok}> {label1} </a>
      <span
        className="link__icon"
        data-testid="link-iconn"
        dangerouslySetInnerHTML={{ __html: iconfacebook ?? '<div></div>' }}
      />
    </div>
  );
}

export default VariableLocationFollowUs;

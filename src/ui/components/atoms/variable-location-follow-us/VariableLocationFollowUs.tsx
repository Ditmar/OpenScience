import './styles.scss';
import type { IProps } from './types/IProps';

function VariableLocationFollowUs(props: IProps) {
  const { label, label1, iconlocation, iconfacebook, pathImage, alt } = props;
  return (
    <div className="location">
      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
        <span className="link__label">{label}</span>
        <span
          className="link__icon"
          data-testid="link-icon"
          dangerouslySetInnerHTML={{ __html: iconlocation ?? '<div></div>' }}
        />
        <img src={pathImage} alt={alt} />
        <a
          href="https://www.facebook.com/tuPaginaDeFacebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link__label">{label1}</span>
          <span
            className="link__icon"
            data-testid="link-iconn"
            dangerouslySetInnerHTML={{ __html: iconfacebook ?? '<div></div>' }}
          />
        </a>
      </a>
    </div>
  );
}

export default VariableLocationFollowUs;

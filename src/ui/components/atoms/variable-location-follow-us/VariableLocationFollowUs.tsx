import './styles.scss';
import type { IProps } from './types/IProps';

function VariableLocationFollowUs(props: IProps) {
  const { label, url, icon, pathImage, alt } = props;
  return (
    <div className="location">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="link__label">{label}</span>
        <span
          className="link__icon"
          data-testid="link-icon"
          dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        />
        <img src={pathImage} alt={alt} />
      </a>
    </div>
  );
}

export default VariableLocationFollowUs;

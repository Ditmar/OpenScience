import './styles.scss';
import type { IProps } from './types/IProps';

function VariableLocationFollowUs(props: IProps) {
  const { text, icon, url, divider } = props;
  return (
    <div className="location">
      <a href={url}>{text} </a>
      
      <span
        className="link__icon"
        data-testid="link-icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="divider">{divider}</span>
    </div>
  );
}

export default VariableLocationFollowUs;

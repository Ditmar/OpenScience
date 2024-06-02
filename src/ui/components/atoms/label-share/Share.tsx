import './styles.scss';
import type { IProps } from './types/IProps';

function Share(props: IProps) {
  const { text, icon } = props;
  return (
    <label className="label-share">
      <span
        className="label-share__icon"        
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="label-share__text">{text}</span>
    </label>
  );
}

export default Share;
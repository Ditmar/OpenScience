import './styles.scss';
import type { Props } from './types/IProps';

function Button(props: Props) {
  const { children, iconAfter, iconBefore } = props;
  return (
    <button className="button">
      {iconBefore && (
        <span className="button__icon--before" dangerouslySetInnerHTML={{ __html: iconBefore }} />
      )}
      <span className="button__label">{children}</span>
      {iconAfter && (
        <span className="button__icon--after" dangerouslySetInnerHTML={{ __html: iconBefore }} />
      )}
    </button>
  );
}

export default Button;

import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonLabel(props: IProps) {
  const { children, icon } = props;
  return (
    <div className="container">
      <button className="button-label">
        <span
          className="button__icon--before"
          dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        />
        <span className="button__label">{children}</span>
      </button>
    </div>
  );
}
export default ButtonLabel;

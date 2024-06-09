/* eslint-disable react/no-danger */
import './styles.scss';
import type { IProps } from './types/IProps';

function Button(props: IProps) {
  const { children, icon } = props;
  return (
    <button className="button">
      <span
        className="button__icon--before"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="button__label">{children}</span>
    </button>
  );
}
export default Button;

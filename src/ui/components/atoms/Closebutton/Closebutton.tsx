import './styles.scss';
import type { IProps } from './types/IProps';

function Closebutton(props: IProps) {
  const { icon } = props;
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button className="Close_button">
      <span
        className="button__icon--before"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}
export default Closebutton;

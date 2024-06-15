import './styles.scss';
import type { IProps } from './types/IProps';

function BurgerButton(props: IProps) {
  const { variant, icon } = props;
  return (
    <button className="button">
      <span
        className="button__icon--before"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="button__label">{variant}</span>
    </button>
  );
}
export default BurgerButton;

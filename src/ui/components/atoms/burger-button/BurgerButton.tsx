import './BurgerButton.scss';
import type { IProps } from './types/IProps';

function BurgerButton(props: IProps) {
  const { variant, icon } = props;
  return (
    <button className="button-burger">
      <span
        className="button__icon-burger--before"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="button__label">{variant}</span>
    </button>
  );
}

export default BurgerButton;

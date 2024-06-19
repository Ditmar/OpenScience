import './ButtonWithVariants.scss';
import type { IProps } from './types/IProps';

function ButtonVariant(props: IProps) {
  const { children, variant, onClick } = props;

  return (
    <div className="buttons-variant">
      <button
        className={`buttons-variant__button buttons-variant__button--${variant}`}
        onClick={onClick}
      >
        <span className="buttons-variant__label">{children}</span>
      </button>
    </div>
  );
}

export default ButtonVariant;

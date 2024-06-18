import './ButtonWithVariants.scss';
import type { IProps } from './types/IProps';

function ButtonVariant(props: IProps) {
  const { children, color } = props;
  const colorFont = `button--${color ?? ''}`;

  return (
    <button className="button__label">
      <div className={`button ${colorFont}`}>
        <span className="button__text">{children}</span>
      </div>
    </button>
  );
}

export default ButtonVariant;

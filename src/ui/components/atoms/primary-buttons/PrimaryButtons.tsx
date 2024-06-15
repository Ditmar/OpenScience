import './styles.scss';
import type { IProps } from './types/IProps';

function PrimaryButtons(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div>
      <button
        className={`buttons-primary__button buttons-primary__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttons-primary__label `}>{children}</span>
      </button>
    </div>
  );
}
export default PrimaryButtons;

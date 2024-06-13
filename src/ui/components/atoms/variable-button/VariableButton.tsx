import './styles.scss';
import type { IProps } from './types/IProps';

function VariableButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div className="button-variable">
      <button
        className={`button-variable__button button-variable__button--${variant}`}
        onClick={onClick}
      >
        <span className={`button-variable__label `}>{children}</span>
      </button>
    </div>
  );
}
export default VariableButton;

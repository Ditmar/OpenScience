import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div className="button-Publish">
      <button
        className={`button-Publish__button button-Publish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`button-Publish__label `}>{children}</span>
      </button>
    </div>
  );
}
export default PublishButton;

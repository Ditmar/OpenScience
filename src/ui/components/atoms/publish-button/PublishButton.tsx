import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div className="button-publish">
      <button
        className={`button-publish__button button-publish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`button-publish__label `}>{children}</span>
      </button>
    </div>
  );
}
export default PublishButton;

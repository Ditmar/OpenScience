import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
      </button>
    </div>
  );
}
export default PublishButton;

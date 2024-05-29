import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children } = props;
  return (
    <div className="buttonPublish" data-testid="publish-button">
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
      </button>
    </div>
  );
}
export default PublishButton;

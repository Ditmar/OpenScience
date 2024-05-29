import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children } = props;
  return (
    <div className="buttonPublish">
      <button
        className="buttonPublish__button"
        style={{
          background: '#0793bf',
        }}
      >
        <span
          className="buttonPublish__label"
          style={{
            color: '#fff',
          }}
        >
          {children}
        </span>
      </button>
    </div>
  );
}
export default PublishButton;

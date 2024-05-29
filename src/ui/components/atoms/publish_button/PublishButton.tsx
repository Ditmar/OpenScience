import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
<<<<<<< HEAD
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
=======
  const { children } = props;
  return (
    <div className="buttonPublish">
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3e47174 (feature(common):added SEM-040)
      </button>
    </div>
  );
}
export default PublishButton;

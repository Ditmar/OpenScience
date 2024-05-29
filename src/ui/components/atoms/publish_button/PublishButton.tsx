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
<<<<<<< HEAD
    <div className="buttonPublish">
<<<<<<< HEAD
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
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
>>>>>>> d6e7f28 (feature(common):added SEM-040)
=======
    <div className="buttonPublish" data-testid="publish-button">
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
      </button>
    </div>
  );
}
export default PublishButton;

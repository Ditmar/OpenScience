import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
  const { children, variant, onClick } = props;
  return (
<<<<<<< HEAD
    <div className="buttonPublish">
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
<<<<<<< HEAD
=======
  const { children } = props;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <div className="buttonPublish">
>>>>>>> ed0ea7c (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
  const { children } = props;
  return (
    <div className="buttonPublish">
<<<<<<< HEAD
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 64b0a1d (feature(common):added SEM-040)
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
>>>>>>> 85d6f72 (feature(common):added SEM-040)
=======
    <div className="buttonPublish" data-testid="publish-button">
=======
    <div className="buttonPublish">
>>>>>>> 261e345 (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> fb4f33d (feature(common):added SEM-040 changes)
=======
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
=======
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
<<<<<<< HEAD
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
  const { children } = props;
  return (
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
=======
    <div className="buttonPublish">
>>>>>>> ed0ea7c (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
      </button>
    </div>
  );
}
export default PublishButton;

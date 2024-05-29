import './styles.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 76a2ecd (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> e3583b0 (feature(common):added SEM-040)
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 182f71a3fb35a796eec4ec3751c01a7140e436e6
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
>>>>>>> 172c9d9 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 797db11 (feat:resolve rebase SEM-040)
=======
>>>>>>> 39c123b (feature(common):added SEM-040)
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const { children } = props;
=======
  const { children, variant, onClick } = props;
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8882fca (feature(common):added SEM-040 changes)
    <div className="buttonPublish">
<<<<<<< HEAD
<<<<<<< HEAD
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
      <button
=======
>>>>>>> 85d6f72 (feature(common):added SEM-040)
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
<<<<<<< HEAD
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
<<<<<<< HEAD
  const { children } = props;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
=======
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 76a2ecd (feature(common):added changes per PR comments SEM-040)
      <button
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 172c9d9 (feature(common):added changes per PR comments SEM-040)
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
  const { children } = props;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="buttonPublish">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2bec0d4 (feature(common):added SEM-040)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 182f71a3fb35a796eec4ec3751c01a7140e436e6
=======
>>>>>>> 85d6f72 (feature(common):added SEM-040)
<<<<<<< HEAD
>>>>>>> 57ecd38 (feature(common):added SEM-040)
=======
=======
    <div className="buttonPublish" data-testid="publish-button">
=======
    <div className="buttonPublish">
>>>>>>> 261e345 (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> fb4f33d (feature(common):added SEM-040 changes)
>>>>>>> 841618e (feature(common):added SEM-040 changes)
=======
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
>>>>>>> 76a2ecd (feature(common):added changes per PR comments SEM-040)
=======
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3e47174 (feature(common):added SEM-040)
>>>>>>> e3583b0 (feature(common):added SEM-040)
=======
>>>>>>> 2bec0d4 (feature(common):added SEM-040)
=======
=======
    <div className="buttonPublish" data-testid="publish-button">
=======
    <div className="buttonPublish">
>>>>>>> ed0ea7c (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> c09f0e3 (feature(common):added SEM-040 changes)
>>>>>>> 2022cd9 (feature(common):added SEM-040 changes)
=======
>>>>>>> 172c9d9 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 797db11 (feat:resolve rebase SEM-040)
=======
  const { children } = props;
  return (
    <div className="buttonPublish">
<<<<<<< HEAD
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> dbe8bf5 (feature(common):added SEM-040)
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
>>>>>>> ceb65bb (feature(common):added SEM-040)
=======
    <div className="buttonPublish" data-testid="publish-button">
=======
    <div className="buttonPublish">
>>>>>>> c82e525 (feature(common):added SEM-040 changes)
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3d4ac0c (feature(common):added SEM-040 changes)
=======
  const { children, variant, onClick } = props;
  return (
    <div className="buttonPublish">
      <button
        className={`buttonPublish__button buttonPublish__button--${variant}`}
        onClick={onClick}
      >
        <span className={`buttonPublish__label `}>{children}</span>
>>>>>>> 3a0fa91 (feature(common):added changes per PR comments SEM-040)
=======
=======
  const { children } = props;
  return (
    <div className="buttonPublish">
<<<<<<< HEAD
      <button className="buttonPublish__button">
        <span className="buttonPublish__label">{children}</span>
>>>>>>> 3e47174 (feature(common):added SEM-040)
<<<<<<< HEAD
>>>>>>> 39c123b (feature(common):added SEM-040)
=======
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
>>>>>>> cc407f0 (feature(common):added SEM-040)
      </button>
    </div>
  );
}
export default PublishButton;

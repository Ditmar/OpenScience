import styles from './ErrorMessage.module.scss';
import type { IProps } from './types/IProps';

function ErrorMessage(props: IProps) {
  const { code, title, message, redirectTo, linkText, messageinit, messagefinish } = props;
  const isServerError = code === 500;

  return (
    <div className={`${styles['error-message']} ${isServerError ? styles['server-error'] : ''}`}>
      <h1>{code}</h1>
      <p className={styles.title}>{title}</p>
      <p className={styles.message}>{message}</p>
      <p className={styles.message}>
        {messageinit}
        <a href={redirectTo} className={styles.a}>
          {linkText}
        </a>
        {messagefinish}
      </p>
    </div>
  );
}

export default ErrorMessage;

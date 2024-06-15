import './styles.scss';
import type { IProps } from './types/IProps';

function ErrorMessage(props: IProps) {
  const { code, title, message, redirectTo, linkText, messageinit, messagefinish } = props;
  const isServerError = code === 500;

  return (
    <div className={`error-message ${isServerError ? 'server-error' : ''}`}>
      <h1>{code}</h1>
      <p className="title">{title}</p>
      <p className="message">{message}</p>
      <p className="message">
        {messageinit}
        <a href={redirectTo}>{linkText}</a>
        {messagefinish}
      </p>
    </div>
  );
}
export default ErrorMessage;

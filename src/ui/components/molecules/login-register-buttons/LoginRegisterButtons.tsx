import type { IProps } from './types/IProps.js';
import './styles.scss';

function LoginRegisterButtons(props: IProps) {
  const { children } = props;
  return <div className="auth-buttons">{children}</div>;
}

export default LoginRegisterButtons;

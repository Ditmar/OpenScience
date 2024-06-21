import type { IProps } from './types/IProps';
import './styles.scss';

function LoginRegisterButtons(props: IProps) {
  const { children } = props;
  return <div className="auth-buttons">{children}</div>;
}

export default LoginRegisterButtons;

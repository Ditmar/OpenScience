import type { IProps } from './types/IProps';
import styles from './LoginRegisterButton.module.scss';

function LoginRegisterButtons(props: IProps) {
  const { children } = props;
  return <div className={styles['auth-buttons']}>{children}</div>;
}

export default LoginRegisterButtons;

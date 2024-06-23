import type { IProps } from './types/IProps';
import './LogoLocationLinkfb.scss';

function LoginRegisterButtons(props: IProps) {
  const { children } = props;
  return <div className="logo-location-linkfb">{children}</div>;
}

export default LoginRegisterButtons;

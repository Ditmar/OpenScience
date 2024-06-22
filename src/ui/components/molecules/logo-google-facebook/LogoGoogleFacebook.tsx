import type { IProps } from './types/IProps';
import './styles.scss';

function LogoGoogleFacebook(props: IProps) {
  const { children } = props;

  return <div className="logo-google-facebook">{children}</div>;
}

export default LogoGoogleFacebook;

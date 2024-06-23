import type { IProps } from './types/IProps';
import './Footer.scss';

function Footer(props: IProps) {
  const { children } = props;
  return <div className="logo-location-linkfb">{children}</div>;
}

export default Footer;

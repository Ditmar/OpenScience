import SMButton from '../../atoms/social-media-button/Button';
import type { IProps } from './types/IProps';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import './network-login.scss';
import logo from '../../../../assets/icons/logo.svg?raw';
import facebook from '../../../../assets/icons/facebook.svg?raw';
import google from '../../../../assets/icons/google.svg?raw';

function NetworkLogin({ color = 'primary' }: IProps) {
  const getColorClassName = () => {
    return color === 'primary' ? 'panel--primary' : 'panel--secondary';
  };

  return (
    <div className={`panel ${getColorClassName()}`} data-testid="net-login">
      <LogoFooter icon={logo} color="primary" />
      <div className="button-google">
        <SMButton icon={google}>Google</SMButton>
      </div>
      <div className="button-facebook">
        <SMButton icon={facebook}>Facebook</SMButton>
      </div>
    </div>
  );
}

export default NetworkLogin;

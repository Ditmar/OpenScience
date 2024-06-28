import type { IProps } from './types/IProps';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import SMButton from 'ui/components/atoms/social-media-button/Button';
import './network-login.scss';
import logo from '../../../../assets/icons/logo.svg?raw';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';

function NetworkLogin({ color = 'primary' }: IProps) {
  const getColorClassName = () => {
    return color === 'primary' ? 'panel--primary' : 'panel--secondary';
  };

  return (
    <div className={`panel ${getColorClassName()}`} data-testid="net-login">
      <LogoFooter icon={logo} color="primary" />
      <div className='Button__Google'>
        <SMButton children={'Google'} icon={Google} />
      </div>
      <div className='Button__Facebook'>
        <SMButton children={'Facebook'} icon={Facebook} />
      </div>      
    </div>
  );
}

export default  NetworkLogin;

import type { IProps } from './types/IProps';
import './styles.scss';
import Button from '../../atoms/button/Button';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';

function LogoGoogleFacebook({ googleIcon, facebookIcon, logoIcon, onGoogleLogin, onFacebookLogin }: IProps) {
  return (
    <div className="auth-container">
      <LogoFooter icon={logoIcon} />
      <div className="auth-buttons">
        <Button icon={googleIcon} onClick={onGoogleLogin}>
          Google
        </Button>
        <Button icon={facebookIcon} onClick={onFacebookLogin}>
          Facebook
        </Button>
      </div>
    </div>
  );
}

export default LogoGoogleFacebook;

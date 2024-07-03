import type { IProps } from './types/IProps';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import './LoginPage.scss';
import logo from '../../../../assets/icons/logo.svg?raw';
import vector from '../../../../assets/icons/vector.svg?raw';
import StartButton from '../../atoms/start-button/StartButton';

function LoginPage({ color = 'primary' }: IProps) {
  const getColorClassName = () => {
    return color === 'primary' ? 'page--primary' : 'page--secondary';
  };

  return (
    <div className={`page ${getColorClassName()}`} data-testid="login-page">
      <LogoFooter icon={logo} color="primary" />
      <div className="button-start">
        <StartButton icon={vector}>INICIAR</StartButton>
      </div>
    </div>
  );
}

export default LoginPage;

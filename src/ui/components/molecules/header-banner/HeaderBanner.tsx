import './HeaderBanner.scss';
import { useCallback, useState } from 'react';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import NavBar from '../../atoms/navbar/Navbar';
import Logo from '../../atoms/logo/logo';
import MagnifyingGlass from '../magnifying-glass/MagnifyingGlass';
import LoginRegisterButtons from '../login-register-buttons/LoginRegisterButtons';
import PrimaryButtons from '../../atoms/primary-buttons/PrimaryButtons';
import magnifyingglass from '../../../../assets/icons/magnifyingglass.svg?raw';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import type { IProps } from './types/IProps';

function HeaderBanner({ textSearch, backgroundImage, logo }: IProps) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleMoreClick = useCallback(() => {
    setShowMore((prevShowMore) => !prevShowMore);
  }, []);

  
  return (
    <div className="layout">
      <div className="logo-container">
        <Logo src={logo} alt="Logotipo de la empresa" variant="primary">
          .
        </Logo>
        <div className="search-bar">
          <MagnifyingGlass onClick={handleMoreClick} icon={magnifyingglass} variant="solid" />
        </div>
      </div>
      <div className="hero-banner-container">
        <HeroBanner backgroundImage={backgroundImage} alt="Rectangle6" className="hola">
          <div className="navbar-container">
            <NavBar icon={ArticlesIcon}>Artículos</NavBar>
            <NavBar icon={StartIcon}>Inicio</NavBar>
            <NavBar icon={VolumesIcon}>Volúmenes</NavBar>
          </div>

          <div className="login-register-buttons">
            <LoginRegisterButtons>
              <PrimaryButtons variant="primary">Iniciar sesión</PrimaryButtons>
              <PrimaryButtons variant="secondary">Registrarse</PrimaryButtons>
            </LoginRegisterButtons>
          </div>
        </HeroBanner>
      </div>

      <div className="search-input-list-container">
        {showMore && <input className="label__glass" />}
        {showMore && <hr className="divider--solid" />}
        {showMore && (
          <button className="button1">
            <span data-testid="button_glass1" className="button_label--glass">
              {textSearch}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default HeaderBanner;

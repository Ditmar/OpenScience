import { useState } from 'react';
import './BannerVolumes.scss';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import NavBar from '../../atoms/navbar/Navbar';
import Logo from '../../atoms/logo/logo';
import MagnifyingGlass from '../magnifying-glass/MagnifyingGlass';
import YearList from '../year-list/YearList';
import magnifyingglass from '../../../../assets/icons/magnifyingglass.svg?raw';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import type { IProps, IData } from './types/IProps';

function BannerVolumes({ data, yearText, textSearch, backgroundImage, logo }: IProps) {
  const [dataYears] = useState<IData[]>(data);
  const [hiddenYear, setHiddenYear] = useState<boolean>(false);
  return (
    <div className="layout">
      <div className="search-bar">
        <button
          className="button-search"
          onClick={() => {
            setHiddenYear(!hiddenYear);
          }}
        >
          <MagnifyingGlass icon={magnifyingglass} variant="solid">
            {textSearch}
          </MagnifyingGlass>
        </button>
      </div>
      <div className="hero-banner-container">
        <div className="logo-container">
          <Logo src={logo} alt="Logotipo de la empresa" variant="primary">
            .
          </Logo>
        </div>
        <HeroBanner backgroundImage={backgroundImage} alt="Rectangle6" className="hola">
          <div className="navbar-container">
            <NavBar icon={ArticlesIcon}>Artículos</NavBar>
            <NavBar icon={StartIcon}>Inicio</NavBar>
            <NavBar icon={VolumesIcon}>Volúmenes</NavBar>
          </div>
        </HeroBanner>
      </div>
      <div className={!hiddenYear ? 'year-list-container' : 'year-list-container-hidden'}>
        <YearList data={dataYears} buttonText={yearText} />
      </div>
    </div>
  );
}

export default BannerVolumes;

import React, { useState } from 'react';
import Logo from '../../atoms/logo/logo';
import ButtonBurger from '../../atoms/button-burger/ButtonBurger';
import './NavigationMenu.scss';
import type { NavigationMenuProps } from './types/Iprops';
import burgerIcon from '../../../../assets/icons/burger-menu.svg?raw';
import Button from '../../atoms/navbar/Navbar';
import ButtonLabel from '../../atoms/button-label/ButtonLabel';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';

function NavigationMenu({ logoSrc,icon }: NavigationMenuProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="had">
      <nav className="navigation-menu">
        <Logo src={logoSrc} children={undefined} variant={'primary'} />
        <div className="meuu">
          <Button children="Articulos" icon={ArticlesIcon} />
          <Button children="Inicio" icon={StartIcon} />
          <Button children="Volumenes" icon={VolumesIcon} />
        </div>
        <div className="los">
          <ButtonBurger icon={icon || burgerIcon} color="primary" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="menu-items">
              <ButtonLabel children="Inicio" icon={Home} variant="secondary" />
              <ButtonLabel children="Servicios" icon={Articles} variant="primary" />
              <ButtonLabel children="Contacto" icon={Volume} variant="tertiary" />
              <button className="close-menu" onClick={closeMenu}>X</button>
            </div>
          )}
        </div>
        <div className="barra"></div>
        <div className="barras"></div>
      </nav>
      <div className="barrass"></div>
    </header>
  );
}

export default NavigationMenu;

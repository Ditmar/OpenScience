import { useState, useCallback } from 'react';
import './NavbarMenu.scss';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import type { IProps, NavbarItem } from './types/IProps';

function NavbarMenu({
  items,
  footerItem,
  backgroundImage,
  alt = 'Rectangle6',
  className = 'navbar-hero-banner',
}: IProps) {
  const [navItems] = useState<NavbarItem[]>(items);

  const handleClick = useCallback((onClick?: () => void) => {
    if (onClick) onClick();
  }, []);

  return (
    <HeroBanner backgroundImage={backgroundImage} alt={alt} className={className}>
      <nav className="navbar-menu" role="navigation" aria-label="Menú de navegación principal">
        {navItems.map(({ children, icon, onClick }) => (
          <button
            key={String(children)}
            type="button"
            className="navbar-wrapper"
            onClick={() => {
              handleClick(onClick);
            }}
            aria-label={typeof children === 'string' ? children : undefined}
          >
            <div className="icon-circle" dangerouslySetInnerHTML={{ __html: icon }} />
            <div className="label-container">
              <span className="label">{children}</span>
            </div>
          </button>
        ))}
        {footerItem ? (
          <div className="navbar-menu__footer">
            <button
              type="button"
              className="navbar-wrapper navbar-wrapper--logout"
              onClick={() => {
                handleClick(footerItem.onClick);
              }}
              aria-label={
                typeof footerItem.children === 'string'
                  ? footerItem.children
                  : 'Botón de cierre de sesión'
              }
            >
              <span className="logout-icon" aria-hidden="true">
                <span dangerouslySetInnerHTML={{ __html: footerItem.icon }} />
              </span>
              {typeof footerItem.children === 'string' && (
                <span className="visually-hidden">{footerItem.children}</span>
              )}
            </button>
          </div>
        ) : null}
      </nav>
    </HeroBanner>
  );
}

export default NavbarMenu;

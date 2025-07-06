import { useCallback } from 'react';
import './NavbarMenu.scss';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import type { IProps } from './types/IProps';

interface NavbarMenuProps extends IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function NavbarMenu({
  items,
  footerItem,
  backgroundImage,
  alt = 'Rectangle6',
  className = 'navbar-hero-banner',
  onOpen,
  onClose,
  isOpen = true,
}: NavbarMenuProps) {
  const handleClick = useCallback((onClick?: () => void) => {
    if (onClick) onClick();
  }, []);

  const handleFooterClick = useCallback(() => {
    handleClick(footerItem?.onClick);
    onClose();
  }, [footerItem, handleClick, onClose]);

  return (
    <HeroBanner
      backgroundImage={backgroundImage}
      alt={alt}
      className={className}
      aria-label="Sección del menú de navegación"
    >
      {!isOpen && (
        <button className="open-menu-button" onClick={onOpen} aria-label="Abrir menú" type="button">
          Abrir menú
        </button>
      )}

      {isOpen && (
        <nav className="navbar-menu" role="navigation" aria-label="Menú de navegación principal">
          {items.map(({ children, icon, onClick }) => (
            <button
              key={String(children)}
              onClick={() => {
                handleClick(onClick);
              }}
              className="navbar-wrapper"
              aria-label={typeof children === 'string' ? children : undefined}
              type="button"
            >
              <div className="icon-circle" dangerouslySetInnerHTML={{ __html: icon }} />
              <div className="label-container">
                <span className="label">{children}</span>
              </div>
            </button>
          ))}

          {footerItem && (
            <div className="navbar-menu__footer">
              <button
                onClick={handleFooterClick}
                className="navbar-wrapper navbar-wrapper--logout"
                aria-label={
                  typeof footerItem.children === 'string'
                    ? footerItem.children
                    : 'Botón de cierre de sesión'
                }
                type="button"
              >
                <div
                  className="logout-icon"
                  dangerouslySetInnerHTML={{ __html: footerItem.icon }}
                />
                {typeof footerItem.children === 'string' && (
                  <span className="visually-hidden">{footerItem.children}</span>
                )}
              </button>
            </div>
          )}
        </nav>
      )}
    </HeroBanner>
  );
}

export default NavbarMenu;

import { useCallback } from 'react';
import './NavbarMenu.scss';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import type { IProps } from './types/IProps';
import {
  IconCircle,
  NavbarMenu as NavbarMenuUI,
  NavbarMenuFooter,
  NavbarWrapper,
  OpenMenuButton,
} from './NavbarMenu.styles';

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
        <OpenMenuButton onClick={onOpen} aria-label="Abrir menú" type="button">
          Abrir menú
        </OpenMenuButton>
      )}

      {isOpen && (
        <NavbarMenuUI role="navigation" aria-label="Menú de navegación principal">
          {items.map(({ children, icon, onClick }) => (
            <NavbarWrapper
              key={String(children)}
              onClick={() => {
                handleClick(onClick);
              }}
              aria-label={typeof children === 'string' ? children : undefined}
              type="button"
            >
              <IconCircle isCircle iconName={icon} />
              <div className="label-container">
                <span className="label">{children}</span>
              </div>
            </NavbarWrapper>
          ))}

          {footerItem && (
            <NavbarMenuFooter>
              <NavbarWrapper
                onClick={handleFooterClick}
                className="navbar-wrapper navbar-wrapper--logout"
                aria-label={
                  typeof footerItem.children === 'string'
                    ? footerItem.children
                    : 'Botón de cierre de sesión'
                }
                type="button"
              >
                <IconCircle iconName={footerItem.icon} />
                {typeof footerItem.children === 'string' && (
                  <span className="visually-hidden">{footerItem.children}</span>
                )}
              </NavbarWrapper>
            </NavbarMenuFooter>
          )}
        </NavbarMenuUI>
      )}
    </HeroBanner>
  );
}

export default NavbarMenu;

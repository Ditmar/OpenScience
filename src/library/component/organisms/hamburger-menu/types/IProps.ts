export interface MenuItem {
  label: string;
  href?: string;
}

export interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

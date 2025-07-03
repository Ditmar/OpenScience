export interface HamburgerMenuItem {
  label: string;
  href?: string;
}

export interface HamburgerMenuListProps {
  items: HamburgerMenuItem[];
  onItemClick?: (label: string) => void;
}

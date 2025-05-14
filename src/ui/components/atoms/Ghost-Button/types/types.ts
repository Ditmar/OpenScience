export interface GhostButtonProps {
  ghostbutton: string;
  variant:
    | 'primary'
    | 'dark'
    | 'violetaintenso'
    | 'violeta'
    | 'teritary'
    | 'verde'
    | 'rojo'
    | 'amarillo';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  withIcon?: boolean;
}

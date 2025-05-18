export interface GhostButtonProps {
  ghostbutton: string;
  variant:
    | 'primary'
    | 'dark'
    | 'intenseviolet'
    | 'violet'
    | 'teritary'
    | 'green'
    | 'red'
    | 'yellow';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  withIcon?: boolean;
}

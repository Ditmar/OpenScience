export interface AuthButtonsProps {
  onLogin: () => void;
  onRegister: () => void;
  loading?: boolean;
  disabled?: boolean;
}

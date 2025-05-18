type CheckboxVariant = 'default' | 'success' | 'info' | 'warning' | 'danger';
type CheckboxShape = 'circle' | 'square';

export interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: CheckboxVariant;
  shape?: CheckboxShape;
  className?: string;
}


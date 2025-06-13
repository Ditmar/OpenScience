export type Variant = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface CheckProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: Variant;
  rounded?: boolean;
}

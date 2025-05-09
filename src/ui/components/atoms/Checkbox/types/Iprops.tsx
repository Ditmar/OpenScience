export type Variant =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'text-main'
  | 'text-secondary'
  | 'text-main-hover'
  | 'background-main'
  | 'color-main'
  | 'text-main-alpha'
  | 'background-desktop'
  | 'background-color-black'
  | 'text-input';

export type Shape = 'square' | 'circle';

export interface IProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: Variant;
  shape?: Shape;
}
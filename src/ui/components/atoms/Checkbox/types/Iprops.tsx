export interface IProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    variant?: 'default' | 'success' | 'info' | 'warning' | 'danger';
    shape?: 'square' | 'circle';
}
  
export interface IProps {
  label: string;
  labelError?: boolean;
  labelDisabled?: boolean;
  labelHelper?: boolean;
  labelSize?: 'small' | 'medium' | 'large';

  iconSize?: string;

  leftIcon?: string;
  leftIconError?: boolean;
  leftIconDisabled?: boolean;

  rightIcon?: string;
  rightIconError?: boolean;
  rightIconDisabled?: boolean;
}

export interface IProps {
  text?: string;
  size?: 'extra-small' | 'small' | 'medium-size' | 'large' | 'extra-large';
  weight?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  color?: 'dark' | 'white';
  textDecoration?: 'none-line' | 'underline' | 'line-through';
  italic?: boolean;
}

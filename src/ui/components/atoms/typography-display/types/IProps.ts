export interface IProps {
  text?: string;
  size?: 'display-xl' | 'display-lg';
  weight?: 'regular' | 'medium';
  color?: 'dark' | 'white';
  textDecoration?: 'none-line' | 'underline' | 'line-through';
  italic?: boolean;
  fontStyle?: 'sans' | 'serif' | 'mono';
}

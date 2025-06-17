export interface IProps {
  timestamp: string | Date;
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  format?: (ts: string | Date) => string;
}

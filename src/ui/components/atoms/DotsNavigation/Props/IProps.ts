export interface IProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  className?: string;
}
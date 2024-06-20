export interface Volume {
  id: string;
  name: string;
  date: string;
}

export interface CarouselProps {
  volumes: Volume[];
  onNext?: () => void;
  onPrev?: () => void;
}

type ImageSource = string | { src: string };

export interface MenuMediaProps {
  imageSrc: ImageSource;
  imageAlt: string;
  onOpenImage?: () => void;
  size?: 'small' | 'medium' | 'large';
}

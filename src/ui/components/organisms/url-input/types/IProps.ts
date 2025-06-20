import {
  type URLInputRadius,
  type URLInputSize,
  type URLInputVariant,
} from '../UrlInput.styles';

export interface URLInputComponentProps {
  value: string;
  onChange: (value: string) => void;
  variant?: URLInputVariant;
  size?: URLInputSize;
  radius?: URLInputRadius;
  label?: string;
  placeholder?: string;
  hintText?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  onCopy?: () => void;
}
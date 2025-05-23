import styles from './TypographyDisplay.module.scss';
import type { IProps } from './types/IProps';

function TypographyDisplay({
  text,
  size,
  weight,
  color,
  textDecoration,
  italic,
  fontStyle,
}: IProps) {
  const sizeClass = size && styles[size] ? styles[size] : '';
  const weightClass = weight && styles[weight] ? styles[weight] : '';
  const colorClass = color && styles[color] ? styles[color] : '';
  const textDecorationClass =
    textDecoration && styles[textDecoration] ? styles[textDecoration] : '';
  const italicClass = italic ? styles.italic : '';
  const fontStyleClass = fontStyle && styles[fontStyle] ? styles[fontStyle] : '';

  return (
    <p
      className={`${styles['typography-display']} 
        ${sizeClass} 
        ${weightClass} 
        ${colorClass} 
        ${textDecorationClass} 
        ${italicClass} 
        ${fontStyleClass}`}
    >
      {text}
    </p>
  );
}

export default TypographyDisplay;

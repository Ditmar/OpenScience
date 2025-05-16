import styles from './TypographyParagraph.module.scss';
import type { IProps } from './types/IProps';

function TypographyParagraph({ text, size, weight, color, textDecoration, italic }: IProps) {
  const sizeParagraph = size && styles[size] ? styles[size] : styles.default;
  const weightParagraph = weight && styles[weight] ? styles[weight] : styles.default;
  const colorParagraph = color && styles[color] ? styles[color] : styles.default;
  const italicParagraph = italic ? styles.italic : '';

  const textDecorationParagraph =
    textDecoration && styles[textDecoration] ? styles[textDecoration] : styles.default;

  return (
    <p
      className={`${styles['typography-paragraph']} 
        ${sizeParagraph} 
        ${weightParagraph} 
        ${colorParagraph} 
        ${textDecorationParagraph} 
        ${italicParagraph} `}
    >
      {text}
    </p>
  );
}

export default TypographyParagraph;

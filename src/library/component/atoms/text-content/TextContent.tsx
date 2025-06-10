import type { IProps } from './types/IProps';
import styles from './TextContent.module.scss';

function TextContent({ text, size, spacing }: IProps) {
  const sizeClass = size ? styles[size] : styles.lg;
  const spacingClass = spacing ? styles[spacing] : styles.default;
  const className = `${styles['text-content']} ${sizeClass} ${spacingClass}`;
  return <h2 className={className}>{text}</h2>;
}

export default TextContent;

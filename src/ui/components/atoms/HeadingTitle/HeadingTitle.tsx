import type { IProps } from './types/IProps';
import styles from './HeadingTitle.module.scss';

function HeadingTitle({ text, Styles = 'monospace', Weight = 'medium', Level = 'h1' }: IProps) {
  const headingClass = `${styles['heading-title']} ${styles['heading-title__text']}
  ${styles[`heading-title--level-${Level}`]}
  ${styles[`heading-title--style-${Styles}`]}
  ${styles[`heading-title--weight-${Weight}`]}`;

  const HeadingTag = Level as keyof JSX.IntrinsicElements;

  return <HeadingTag className={headingClass}>{text}</HeadingTag>;
}

export default HeadingTitle;

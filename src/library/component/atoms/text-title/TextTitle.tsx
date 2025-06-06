import type { IProps } from './types/IProps';
import styles from './TextTitle.module.scss';

function TextTitle({ text, size = 'lg', weight = 'regular', spacing = 'default' }: IProps) {
  const classNames = [styles.title, styles[size], styles[weight], styles[spacing]].join(' ');

  return <h1 className={classNames}>{text}</h1>;
}

export default TextTitle;

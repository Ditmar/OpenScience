import type { IProps } from './types/IProps';
import styles from './Title.module.scss';

function Title(props: IProps) {
  const { text, size = 'lg', weight = 'regular', spacing = 'default' } = props;
  return (
    <h1 className={`${styles.title} ${styles[size]} ${styles[weight]} ${styles[spacing]}`}>
      {text}
    </h1>
  );
}

export default Title;

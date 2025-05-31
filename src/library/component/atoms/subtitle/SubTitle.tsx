import type { IProps } from './types/IProps';
import styles from './SubTitle.module.scss';

function SubTitle(props: IProps) {
  const { text, size = 'lg' } = props;
  return <h2 className={`${styles.subtitle} ${styles[size]}`}>{text}</h2>;
}

export default SubTitle;

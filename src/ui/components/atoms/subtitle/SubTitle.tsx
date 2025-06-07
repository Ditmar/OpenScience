import type { IProps } from './types/IProps';
import styles from './SubTitle.module.scss';

function SubTitle(props: IProps) {
  const { 
    text,
    size = 'lg',
    weight = 'regular',
    spacing = 'default',  
  } = props;
  return <h2 className={`${styles.subtitle} ${styles[size]} ${styles[weight]} ${styles[spacing]}`}>{text}</h2>;
}

export default SubTitle;

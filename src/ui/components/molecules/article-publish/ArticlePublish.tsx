import type { IProps } from './types/IProps';
import styles from './ArticlePublish.module.scss';

function ArticlePublish(props: IProps) {
  const { children } = props;

  return <div className={styles['article-publish']}>{children}</div>;
}

export default ArticlePublish;

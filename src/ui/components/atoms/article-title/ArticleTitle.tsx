import styles from './ArticleTitle.module.scss';
import type { IProps } from './types/IProps';

function ArticleTitle({ title, variant }: IProps) {
  const getTextStyle = () => {
    if (variant === 'primary') {
      return styles['articleTitle__text--primary'];
    }
    if (variant === 'secondary') {
      return styles['articleTitle__text--secondary'];
    }
    return '';
  };

  const textStyle = getTextStyle();
  return (
    <div className={styles.articleTitle}>
      <p className={`${styles.articleTitle__text} ${textStyle}`}>{title}</p>
    </div>
  );
}
export default ArticleTitle;
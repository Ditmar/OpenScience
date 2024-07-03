import styles from './ArticleTitle.module.scss';
import type { IProps } from './types/IProps';

function ArticleTitle({ title, variant }: IProps) {
  const getTextStyle = () => {
    if (variant === 'primary') {
      return styles['article-title__text--primary'];
    }
    if (variant === 'secondary') {
      return styles['article-title__text--secondary'];
    }
    return '';
  };

  const textStyle = getTextStyle();
  return (
    <div className={styles['article-title']}>
      <p className={`${styles['article-title__text']} ${textStyle}`}>{title}</p>
    </div>
  );
}

export default ArticleTitle;

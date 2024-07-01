import styles from './ArticleTitle.module.scss';
import type { IProps } from './types/IProps';

function ArticleTitle({ title, variant }: IProps) {
  const getTextStyle = () => {
    if (variant === 'default') {
      return styles.defaultText;
    }
    if (variant === 'primary') {
      return styles.primaryText;
    }
    if (variant === 'secondary') {
      return styles.secondaryText;
    }
    return '';
  };

  const textStyle = getTextStyle();
  return (
    <div className={styles.articleTitle}>
      <p className={`${styles.titleText} ${textStyle}`}>{title}</p>
    </div>
  );
}

export default ArticleTitle;

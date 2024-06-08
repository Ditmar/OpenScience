import './styles.scss';
import type { IProps } from './types/IProps';

function ArticleTitle({ title, variant }: IProps) {
  const getTextStyle = () => {
    if (variant === 'default') {
      return 'default-text';
    }
    if (variant === 'primary') {
      return 'primary-text';
    }
    if (variant === 'secondary') {
      return 'secondary-text';
    }
    return '';
  };
  const textStyle = getTextStyle();
  return (
    <div className="article-title">
      <p className={`title-text ${textStyle}`}>{title}</p>
    </div>
  );
}

export default ArticleTitle;

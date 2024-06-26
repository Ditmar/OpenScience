import type { IProps } from './types/IProps.js';
import './FeaturedArticle.scss';

function FeaturedArticle(props: IProps) {
  const { children } = props;
  return <div className="featured_article_conteiner">{children}</div>;
}

export default FeaturedArticle;

import type { IProps } from './types/IProps';
import './ArticlePublish.scss';

function ArticlePublish(props: IProps) {
  const { children } = props;

  return <div className="article-publish">{children}</div>;
}

export default ArticlePublish;

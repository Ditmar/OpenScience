import type IProps from './types/IProps';
import './Article.scss';

function Article(props: IProps) {
  const { children } = props;

  return <div className="article">{children} </div>;
}

export default Article;

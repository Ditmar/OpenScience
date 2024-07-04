import type { IProps } from './types/IProps';
import './styles.scss';

function ArticlesPage(props: IProps) {
  const { children } = props;

  return <div className="article">{children}</div>;
}

export default ArticlesPage;

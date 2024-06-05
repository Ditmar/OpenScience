import './styles.scss';
import type { IProps } from './types/IProps';

function AuthorLabel(props: IProps) {
  const { variant } = props;
  return <p className="author">{variant}</p>;
}
export default AuthorLabel;

import './LabelArticles.scss';
import type { IProps } from './types/IProps';

function LabelArticles(props: IProps) {
  const { children, variant } = props;
  return (
    <label htmlFor="label" className={`label ${variant ? `label--${variant}` : 'test'}`}>
      <span className="label-articles__text">{children}</span>
    </label>
  );
}

export default LabelArticles;

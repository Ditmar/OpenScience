import './styles.scss';
import type { IProps } from './types/IProps';

function Label(props: IProps) {
  const { children, variant } = props;
  return (
    <label className={`label ${variant ? `label--${variant}` : ''}`}>
      <span className="label__text">{children}</span>
    </label>
  );
}

export default Label;

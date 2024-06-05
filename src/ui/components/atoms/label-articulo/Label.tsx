import './styles.scss';
import type { IProps } from './types/IProps';

function Label(props: IProps) {
  const { children, variant } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`label ${variant ? `label--${variant}` : ''}`}>
      <span className="label__text">{children}</span>
    </label>
  );
}

export default Label;

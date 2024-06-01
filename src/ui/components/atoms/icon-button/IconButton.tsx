import './styles.scss';
import type { IProps } from './types/IProps';

function IconButton(props: IProps) {
  const { icon } = props;
  return (
    <button className="button__share" aria-label="icon">
      <span
        data-testid="button__icon"
        className="button__icon__share"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}
export default IconButton;

import './styles.scss';
import type { IProps } from './types/IProps';

function Share(props: IProps) {
  const { icon, icon1, icon2 } = props;
  return (
    <button className="button__share">
      <span
        data-testid="icon"
        className="button__icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        aria-label="icon"
      />
      <span
        data-testid="icon1"
        className="button__icon"
        dangerouslySetInnerHTML={{ __html: icon1 ?? '<div></div>' }}
        aria-label="icon1"
      />
      <span
        data-testid="icon2"
        className="button__icon"
        dangerouslySetInnerHTML={{ __html: icon2 ?? '<div></div>' }}
        aria-label="icon2"
      />
    </button>
  );
}
export default Share;

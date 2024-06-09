import './styles.scss';
import type { IProps } from './types/IProps';

function MultiFunctionButton(props: IProps) {
  const { icon, onClick } = props;
  return (
    <button className="variable__button" aria-label="Abrir" onClick={onClick}>
      <span
        className="button__icon"
        data-testid="button-icon"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}
export default MultiFunctionButton;

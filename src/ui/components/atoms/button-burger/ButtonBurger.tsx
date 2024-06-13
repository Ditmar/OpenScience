import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonBurger({ variant = 'main', icon, onClick }: IProps) {
  return (
    <button
      className={`button-burger button-burger--${variant}`}
      aria-label="Menu"
      onClick={onClick}
    >
      <span
        data-testid="button-icon"
        className="button-icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}
export default ButtonBurger;

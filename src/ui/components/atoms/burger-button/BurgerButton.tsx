import './styles.scss';
import type { IProps } from './types/IProps';

function BurgerButton(props: IProps) {
  const { active, icon, onClick } = props;
  return (
    <button className={`burger-button ${active ? 'active' : ''}`} onClick={onClick}>
      <span
        className="burger-button__icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
}

export default BurgerButton;


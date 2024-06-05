import type { IProps } from './types/IProps';
import './styles.scss';

function ButtonInit(props: IProps) {
  const { children, varianButton = 'primary' } = props;
  const button = `button__init--${varianButton}`;

  return (
    <button className={`button__init ${button}`}>
      <span>{children}</span>
    </button>
  );
}

export default ButtonInit;

import './ButtonWithVariants.scss';
import type { IProps } from './types/IProps';

function ButtonWithVariants(props: IProps) {
  const { children, variant = 'primary' } = props;
  const variants = `button-variant--${variant}`;
  return (
    <button className={`button-variant ${variants}`}>
      <span className="button-variant-label">{children}</span>
    </button>
  );
}
export default ButtonWithVariants;

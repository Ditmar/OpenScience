import './button.scss';
import type { IProps } from './types/IProps';

function Button(props: IProps) {
  const { children, variant = 'primary', onClick } = props;
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;

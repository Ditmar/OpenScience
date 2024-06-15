import './styles.scss';
import type { IProps } from './types/IProps';

function Divider(props: IProps) {
  const { variant } = props;
  return <hr className={`divider--${variant}`} />;
}

export default Divider;

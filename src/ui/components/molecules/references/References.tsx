import type { IProps } from './types/IProps';
import './References.scss';

function References(props: IProps) {
  const { children } = props;

  return <div className="references">{children}</div>;
}

export default References;

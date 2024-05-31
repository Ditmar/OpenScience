import './styles.scss';
import type { IProps } from './types/IProps';

function LabelRef(props: IProps) {
  const { children } = props;
  return (
    <div className="label-ref">
      <span className="label-ref__icon">R</span>
      <span className="label-ref__label">{children}</span>
    </div>
  );
}
export default LabelRef;

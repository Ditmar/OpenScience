import './Referencia.apa.css';
import type { IProps } from './types/IProps';

function ReferenciaAPA(props: IProps) {
  const { referencia } = props;
  return (
    <div className="referencia-apa">
      <p>{referencia}</p>
    </div>
  );
}

export default ReferenciaAPA;

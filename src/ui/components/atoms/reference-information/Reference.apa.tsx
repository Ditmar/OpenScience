import './styles.scss';
import type { IProps } from './types/IProps';

function ReferenceAPA(props: IProps) {
  const { reference } = props;
  return (
    <div className={`reference-apa ${reference ? 'reference-apa--with-reference' : ''}`}>
      <p>{reference}</p>
    </div>
  );
}

export default ReferenceAPA;

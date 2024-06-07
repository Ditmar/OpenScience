import './styles.scss';
import type { IProps } from './types/IProps';

function ButtonLabel(props: IProps) {
  const { children, icon } = props;
  return (
    <div className="container">
      <span className="icon" dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }} />
      <span className="label">{children}</span>
    </div>
  );
}

export default ButtonLabel;

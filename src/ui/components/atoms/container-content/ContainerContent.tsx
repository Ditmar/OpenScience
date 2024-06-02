import './styles.scss';
import type { IProps } from './types/IProps';

function ContainerContent(props: IProps) {
  const { children, icon } = props;
  return (
    <div className="container-content">
      <div className="container-content-icon">
        <span
          className="container-content-icon-image"
          dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        />
      </div>
      <h1>`{children}`</h1>
    </div>
  );
}
export default ContainerContent;

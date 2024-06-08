import './styles.scss';
import type { IProps } from './types/IProps';

function ContainerContent(props: IProps) {
  const { icon, icon2 } = props;
  return (
    <div className="container-content-icon">
      <span
        className="container-content"
        dangerouslySetInnerHTML={{ __html: icon2 ?? '<div></div>' }}
      />
      <span
        id="container-content-icon-image"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </div>
  );
}
export default ContainerContent;

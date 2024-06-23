import type { IProps } from './types/IProps';
import './styles.scss';

function LabelResourcesPage(props: IProps) {
  const { text } = props;

  return (
    <div className="resources-page">
      <span className="text">{text}</span>
    </div>
  );
}

export default LabelResourcesPage;

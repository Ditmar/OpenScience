import type { IProps } from './types/IProps';
import './styles.scss';

function LabelResourcesPage(props: IProps) {
  const { text1, text2, variant = 'primary' } = props;
  const textVariant = `text--${variant}`;

  return (
    <div className="resources-page">
      <div>
        <span className={textVariant}>{text1}</span>
      </div>
      <div>
        <span className="text">{text2}</span>
      </div>
    </div>
  );
}

export default LabelResourcesPage;

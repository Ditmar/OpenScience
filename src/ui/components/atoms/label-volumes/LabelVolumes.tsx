import type { IProps } from './types/IProps';
import './styles.scss';

function LabelVolumes(props: IProps) {
  const { text, color = 'primary' } = props;
  const colorText = `label-volumes__text--${color}`;

  return (
    <div className={`label-volumes__text ${colorText}`}>
      <span>{text}</span>
    </div>
  );
}

export default LabelVolumes;

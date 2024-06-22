import type { IProps } from './types/IProps';
import './styles.scss';

function CenterVolumeBox(props: IProps) {
  const { text, color = 'primary' } = props;
  const colorText = `center-volumes__text--${color}`;

  return (
    <div className={`center-volumes__text ${colorText}`}>
      <span>{text}</span>
    </div>
  );
}

export default CenterVolumeBox;

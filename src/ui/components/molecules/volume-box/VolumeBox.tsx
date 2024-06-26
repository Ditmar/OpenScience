import type { IProps } from './types/IProps';
import './VolumeBox.scss';

function VolumeBox(props: IProps) {
  const { children, className = '' } = props;
  return (
    <div className={`volume-box ${className}`}>
      <div className="content">{children}</div>
    </div>
  );
}

export default VolumeBox;

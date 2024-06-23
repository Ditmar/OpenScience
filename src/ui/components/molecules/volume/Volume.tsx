import './Volume.scss';
import LabelVol from '../../atoms/label-vol/LabelVol';
import LabelDate from '../../atoms/label-date/LabelDate';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import type { IProps } from './types/IProps';

function Volume({ pathImage, alt, volumen, id, date, overflow }: IProps) {
  return (
    <div className="volume-carousel">
      <Thumbnail pathImage={pathImage} alt={alt} />
      <LabelDate date={date} overflow={overflow} />
      <LabelVol volumen={volumen} id={id} />
    </div>
  );
}

export default Volume;

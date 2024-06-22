import './VolumeCarousel.scss';
import Thumbnail from 'ui/components/atoms/thumbnail/Thumbnail';
import LabelVol from 'ui/components/atoms/label-vol/LabelVol';
import LabelDate from 'ui/components/atoms/label-date/LabelDate';
import type { IProps } from './types/IProps';

function VolumeCarousel({ pathImage, alt, volumen, id, date, overflow }: IProps) {
  return (
    <div className="volume-carousel">
      <Thumbnail pathImage={pathImage} alt={alt} />
      <LabelDate date={date} overflow={overflow} />
      <LabelVol volumen={volumen} id={id} />
    </div>
  );
}

export default VolumeCarousel;

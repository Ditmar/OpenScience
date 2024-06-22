import 'ui/components/molecules/volume-carousel/VolumeCarousel.scss';
import Thumbnail from 'ui/components/atoms/thumbnail/Thumbnail';
import LabelVol from 'ui/components/atoms/label-vol/LabelVol';
import LabelDate from 'ui/components/atoms/label-date/LabelDate';
import type { IProps } from './types/IProps';

function VolumeCarousel({ pathImage, alt, volumen, id, date, overflow }: IProps) {
  return (
    <>
      <Thumbnail pathImage={pathImage} alt={alt} />
      <LabelVol volumen={volumen} id={id} />
      <LabelDate date={date} overflow={overflow} />
    </>
  );
}

export default VolumeCarousel;

import type { StoryObj, Meta } from '@storybook/react';
import LabelDate from 'ui/components/atoms/label-date/LabelDate';
import Volumen from 'ui/components/atoms/label-vol/LabelVol';
import Thumbnail from 'ui/components/atoms/thumbnail/Thumbnail';
import VolumeCarousel from './VolumeCarousel';
import Rectangle27 from '../../atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import Rectangle28 from '../../atoms/thumbnail/__mock__/imgs/Rectangle28.png';
import Rectangle29 from '../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import Rectangle30 from '../../atoms/thumbnail/__mock__/imgs/Rectangle30.png';
import LeftArrow from '../../../../assets/icons/left-arrow.svg?raw';
import RightArrow from '../../../../assets/icons/right-arrow.svg?raw';
import styles from './VolumeCarousel.module.scss';

const meta: Meta<typeof VolumeCarousel> = {
  title: 'ui/components/molecules/volume-carousel',
  component: VolumeCarousel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Carousel: Story = {
  args: {
    leftIcon: LeftArrow,
    children: (
      <div className={styles.carousel__list}>
        {[Rectangle27, Rectangle28, Rectangle29, Rectangle30].map((image, index) => (
          <div className={styles.carousel__item}>
            <div className={styles.thumbnail}>
              <Thumbnail pathImage={String(image)} alt={`Rectangle${String(27 + index)}`} />
            </div>
            <div className={styles.labeldate}>
              <LabelDate date={new Date(2023, 3 + index, 15 + index)} />
            </div>
            <div className={styles.volume}>
              <Volumen volumen="Vol. " id={1 + index} />
            </div>
          </div>
        ))}
      </div>
    ),
    rightIcon: RightArrow,
  },
};

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
      <>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle27)} alt="Rectangle27" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <Volumen volumen="Vol." id={1} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle28)} alt="Rectangle28" />
          <LabelDate date={new Date(2023, 6, 9)} />
          <Volumen volumen="Vol." id={2} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle29)} alt="Rectangle29" />
          <LabelDate date={new Date(2024, 2, 7)} />
          <Volumen volumen="Vol." id={3} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle30)} alt="Rectangle30" />
          <LabelDate date={new Date(2024, 5, 23)} />
          <Volumen volumen="Vol." id={4} />
        </div>
      </>
    ),
    rightIcon: RightArrow,
  },
};

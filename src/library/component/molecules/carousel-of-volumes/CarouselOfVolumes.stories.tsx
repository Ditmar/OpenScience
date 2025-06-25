import type { Meta, StoryObj } from '@storybook/react';
import { CarouselOfVolumes } from './CarouselOfVolumes';
import DataMock from './__mock__/VolumeData.json';

const meta: Meta<typeof CarouselOfVolumes> = {
  component: CarouselOfVolumes,
  title: 'library/component/molecules/carousel-of-volumes',
};

export default meta;

type Story = StoryObj<typeof CarouselOfVolumes>;

export const Default: Story = {
  render: () => <CarouselOfVolumes data={DataMock} />,
};

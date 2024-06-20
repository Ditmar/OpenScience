import '../../../../globals/_mixins.scss';
import '../../../../globals/_variables.scss';
import type { StoryObj, Meta } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'ui/components/molecules/Carousel',
  argTypes: {
    volumes: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    volumes: [
      { id: '1', name: 'Volumen 1', date: '2023-01-01' },
      { id: '2', name: 'Volumen 2', date: '2023-02-01' },
      { id: '3', name: 'Volumen 3', date: '2023-03-01' },
      { id: '4', name: 'Volumen 4', date: '2023-04-01' },
      { id: '5', name: 'Volumen 5', date: '2023-05-01' },
    ],
  },
};

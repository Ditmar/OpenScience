import type { StoryObj, Meta } from '@storybook/react';
import LabelArtDestacados from './LabelArtDestacados';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelArtDestacados> = {
  title: 'ui/components/atoms/label-articulos-destacados',
  component: LabelArtDestacados,
  argTypes: {
    text: { control: 'text' },
    colorVariant: { control: { type: 'select', options: ['main', 'primary', 'secondary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    text: 'ARTICULOS DESTACADOS',
    colorVariant: 'main',
  },
};

export const secondary: Story = {
  args: {
    text: 'ARTICULOS DESTACADOS',
    colorVariant: 'secondary',
  },
};

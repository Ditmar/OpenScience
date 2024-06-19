import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import LabelDate from './LabelDate';

const meta: Meta<typeof LabelDate> = {
  title: 'ui/components/atoms/label-date',
  component: LabelDate,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    month: 'april',
    day: '15',
    year: '2024',
    color: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    month: 'may',
    day: '30',
    year: '2015',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    month: 'July',
    day: '10',
    year: '2010',
    color: 'tertiary',
  },
};

import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import LabelDate from './LabelDate';
import { dateOne, dateTwo, dateThree, months } from './__mook__/dates';

const meta: Meta<typeof LabelDate> = {
  title: 'ui/components/atoms/label-date',
  component: LabelDate,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    month: months[new Date(dateOne).getMonth()],
    day: new Date(dateOne).getDate(),
    year: new Date(dateOne).getFullYear(),
    color: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    month: months[new Date(dateTwo).getMonth()],
    day: new Date(dateTwo).getDate(),
    year: new Date(dateTwo).getFullYear(),
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    month: months[new Date(dateThree).getMonth()],
    day: new Date(dateThree).getDate(),
    year: new Date(dateThree).getFullYear(),
    color: 'tertiary',
  },
};

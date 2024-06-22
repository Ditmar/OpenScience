import type { StoryObj, Meta } from '@storybook/react';
import LabelDate from './LabelDate';

const meta: Meta<typeof LabelDate> = {
  title: 'ui/components/atoms/label-date',
  component: LabelDate,
  argTypes: {
    date: { control: 'date' },
    overflow: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const createStory = (date: Date, overflow?: boolean): Story => ({
  render: (args) => <LabelDate date={new Date(args.date)} overflow={args.overflow} />,
  args: {
    date,
    overflow,
  },
});

export const LabelDate1 = createStory(new Date(2001, 0, 1));
export const LabelDate2 = createStory(new Date(2018, 3, 30));
export const LabelDate3 = createStory(new Date(2022, 11, 20));

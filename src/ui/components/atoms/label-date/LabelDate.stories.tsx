import type { StoryObj, Meta } from '@storybook/react';
import LabelDate from './LabelDate'; // Ensure correct file name and extension

const meta: Meta<typeof LabelDate> = {
  title: 'ui/components/atoms/label-date', // Corrected PascalCase
  component: LabelDate,
  argTypes: {
    month: { control: 'text' },
    day: { control: { type: 'number', min: 1, max: 31 } },
    year: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const createStory = (month: string, day: number, year: number): Story => ({
  render: (args) => <LabelDate month={args.month} day={args.day} year={args.year} />,
  args: {
    month,
    day,
    year,
  },
});

export const LabelDate1 = createStory('January', 1, 2005);
export const LabelDate2 = createStory('April', 30, 2018);
export const LabelDate3 = createStory('December', 20, 2022);

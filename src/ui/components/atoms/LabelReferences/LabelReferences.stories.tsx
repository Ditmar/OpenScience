import type { StoryObj, Meta } from '@storybook/react';
import LabelReferences from './LabelReferences';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelReferences> = {
  title: 'ui/components/atoms/LabelReferences',
  component: LabelReferences,
  argTypes: {
    text: { control: 'text' },
    colorVariant: { control: { type: 'select', options: ['primary', 'main'] } },
    sizeVariant: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomText: Story = {
  args: {
    text: 'Referencias',
  },
};

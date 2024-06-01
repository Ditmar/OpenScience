import type { StoryObj, Meta } from '@storybook/react';
import LabelReferences from './LabelReferences';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelReferences> = {
  title: 'ui/components/atoms/label-references',
  component: LabelReferences,
  argTypes: {
    text: { control: 'text' },
    colorVariant: { control: { type: 'select', options: ['primary', 'main'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Referencias',
  },
};

export const Primary: Story = {
  args: {
    colorVariant: 'main',
  },
};

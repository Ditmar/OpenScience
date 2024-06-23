import type { StoryObj, Meta } from '@storybook/react';
import DividerVariables from './DividerVariables';

const meta: Meta<typeof DividerVariables> = {
  title: 'ui/components/atoms/divider-variables',
  component: DividerVariables,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

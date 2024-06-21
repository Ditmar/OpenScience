import type { Meta, StoryObj } from '@storybook/react';
import OptionMenu from './OptionMenu';

const meta: Meta<typeof OptionMenu> = {
  title: 'ui/components/molecules/Option-Menu',
  component: OptionMenu,
};

export default meta;

type Story = StoryObj<typeof OptionMenu>;

export const Default: Story = {};

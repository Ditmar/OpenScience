import type { StoryObj, Meta } from '@storybook/react';
import SidePanel from './SPanel';
import logo from '../../../../../assets/icons/logo.svg?raw';

const meta: Meta<typeof SidePanel> = {
  title: 'ui/components/molecules/side-panel/panel',
  component: SidePanel,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: logo,
    color: 'primary',
  },
};

export const Secodary: Story = {
  args: {
    icon: logo,
    color: 'secondary',
  },
};

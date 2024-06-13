import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import magnifyingglass from '../../../../assets/icons/magnifyingglass.svg?raw';
import MagnifyingGlass from './MagnifyingGlass';

const meta = {
  title: 'ui/components/atoms/magnifying-glass',
  component: MagnifyingGlass,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dotted', 'dashed'],
    },
  },
} as Meta<typeof MagnifyingGlass>;

export default meta;

type Story = StoryObj<typeof meta>;

export const agnifyingGlass: Story = {
  args: {
    icon: magnifyingglass,
    variant: 'solid',
    children: 'BUSCAR',
  },
};

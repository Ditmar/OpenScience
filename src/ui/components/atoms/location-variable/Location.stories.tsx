import type { StoryObj, Meta } from '@storybook/react';
import Facebook from '../../../../assets/icons/facelocation.svg?raw';
import location from '../../../../assets/icons/location.svg?raw';
import Location from './Location';

const meta = {
  title: 'ui/components/atoms/location-variable',
  component: Location,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dotted', 'dashed'],
    },
  },
} as Meta<typeof Location>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: location,
    children: 'UBICACIÓN',
    variant: 'solid',
    icon1: Facebook,
    children1: 'SÍGUENOS EN',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import Location from './Location';
import type { IFooterProps } from './types/IProps';
import facebookIcon from '../../../../assets/icons/facelocation.svg?raw';
import locationIcon from '../../../../assets/icons/location.svg?raw';

const meta: Meta<IFooterProps> = {
  title: 'ui/components/molecules/location',
  component: Location,
  argTypes: {
    locationText: { control: 'text' },
    followUsText: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    icons: { control: false },
  },
};

export default meta;

type Story = StoryObj<IFooterProps>;

export const Default: Story = {
  args: {
    locationText: 'UBICACIÓN',
    followUsText: 'SÍGUENOS EN',
    size: 'medium',
    icons: {
      location: locationIcon,
      facebook: facebookIcon,
    },
  },
};

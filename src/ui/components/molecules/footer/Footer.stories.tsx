import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import type { IFooterProps } from './types/IProps';
import facebookIcon from '../../../../assets/icons/facelocation.svg?raw';
import locationIcon from '../../../../assets/icons/location.svg?raw';

const meta: Meta<IFooterProps & { icons: { location: string; facebook: string } }> = {
  title: 'ui/components/molecules/footer',
  component: Footer,
  argTypes: {
    locationText: { control: 'text' },
    followUsText: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<IFooterProps & { icons: { location: string; facebook: string } }>;

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

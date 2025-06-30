import type { StoryObj } from '@storybook/react';
import IconPhone from './IconPhone';

const meta = {
  title: 'ui/Components/Atoms/IconPhone',
  component: IconPhone,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: 'Phone Number',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'Phone Number',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'Phone Number',
    size: 'large',
  },
};

export const WithCloseButton: Story = {
  args: {
    text: 'Phone Number',
    size: 'medium',
    onClose: () => {
      // eslint-disable-next-line no-console
      console.log('Close clicked');
    },
  },
};

export const Disabled: Story = {
  args: {
    text: 'Phone Number',
    size: 'medium',
    disabled: true,
  },
};

import type { StoryObj, Meta } from '@storybook/react';
import URLInput from './URLinput';

const meta: Meta<typeof URLInput> = {
  title: 'ui/components/atoms/URLInput',
  component: URLInput,
  argTypes: {
    onChange: { action: 'changed' },
    onCloseClick: { action: 'closeClicked' },
    onCopyClick: { action: 'copyClicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'ruvojahan.com',
    label: 'Website Address',
    variant: 'default',
  },
};

export const Focus: Story = {
  args: {
    value: 'ruvojahan.com',
    variant: 'focus',
  },
};

export const Error: Story = {
  args: {
    value: 'ruvojahan.com',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    value: 'ruvojahan.com',
    variant: 'disabled',
  },
};

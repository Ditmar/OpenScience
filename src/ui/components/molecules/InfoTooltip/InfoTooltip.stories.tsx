import type { Meta, StoryObj } from '@storybook/react';
import InfoTooltip from './InfoTooltip';

const meta: Meta<typeof InfoTooltip> = {
  title: 'ui/components/Molecules/InfoTooltip',
  component: InfoTooltip,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    delay: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

export const Default: Story = {
  args: {
    content: 'This is additional information about the element',
  },
};

export const TopPosition: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
  },
};

export const BottomPosition: Story = {
  args: {
    content: 'Tooltip at the bottom',
    position: 'bottom',
  },
};

export const LeftPosition: Story = {
  args: {
    content: 'Tooltip on the left',
    position: 'left',
  },
};

export const RightPosition: Story = {
  args: {
    content: 'Tooltip on the right',
    position: 'right',
  },
};

export const SmallSize: Story = {
  args: {
    content: 'Small tooltip',
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    content: 'Large tooltip',
    size: 'large',
  },
};

export const WithCustomIcon: Story = {
  args: {
    content: 'Tooltip with custom icon',
    icon: <span style={{ fontSize: '18px', fontWeight: 'bold' }}>?</span>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with 1 second delay',
    delay: 1000,
  },
};

export const WithChildren: Story = {
  args: {
    content: 'Tooltip triggered by a child element',
    children: <button style={{ padding: '8px 16px' }}>Hover here</button>,
  },
};

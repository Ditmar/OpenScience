import type { Meta, StoryObj } from '@storybook/react';
import InfoTooltip from './InfoTooltip';

const meta: Meta<typeof InfoTooltip> = {
  title: 'ui/components/atoms/InfoTooltip',
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
    content: 'Esta es una información adicional sobre el elemento',
  },
};

export const TopPosition: Story = {
  args: {
    content: 'position top',
    position: 'top',
  },
};

export const BottomPosition: Story = {
  args: {
    content: 'position bottom',
    position: 'bottom',
  },
};

export const LeftPosition: Story = {
  args: {
    content: 'position left',
    position: 'left',
  },
};

export const RightPosition: Story = {
  args: {
    content: 'position right',
    position: 'right',
  },
};

export const SmallSize: Story = {
  args: {
    content: 'Tooltip pequeño',
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    content: 'Tooltip grande',
    size: 'large',
  },
};

export const WithCustomIcon: Story = {
  args: {
    content: 'Tooltip con ícono personalizado',
    icon: <span style={{ fontSize: '18px', fontWeight: 'bold' }}>?</span>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip con retardo de 1 segundo',
    delay: 1000,
  },
};

export const WithChildren: Story = {
  args: {
    content: 'Tooltip activado por un elemento hijo',
    children: <button style={{ padding: '8px 16px' }}>Pasa el cursor aquí</button>,
  },
};

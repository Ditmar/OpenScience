import type { StoryObj, Meta } from '@storybook/react';
import ButtonNumber from './ButtonNumber';

const meta = {
  title: 'ui/components/atoms/button-number',
  component: ButtonNumber,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      defaultValue: 'filled',
    },
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'circle'],
      defaultValue: 'square',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
  },
} as Meta<typeof ButtonNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultText = '1';

export const Filled: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        shape={args.shape}
        variant={args.variant}
        inactive={args.inactive}
        selected={args.selected}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    variant: 'filled',
  },
};

export const Outline: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        shape={args.shape}
        variant={args.variant}
        inactive={args.inactive}
        selected={args.selected}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    variant: 'outline',
  },
};

export const Ghost: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        shape={args.shape}
        variant={args.variant}
        inactive={args.inactive}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    variant: 'ghost',
  },
};

export const Square: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        variant={args.variant}
        shape={args.shape}
        inactive={args.inactive}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    shape: 'square',
  },
};

export const Rounded: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        variant={args.variant}
        shape={args.shape}
        inactive={args.inactive}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    shape: 'rounded',
  },
};

export const Circle: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        variant={args.variant}
        shape={args.shape}
        inactive={args.inactive}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    shape: 'circle',
  },
};

export const Inactive: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        variant={args.variant}
        shape={args.shape}
        inactive={args.inactive}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    inactive: true,
  },
};

export const Selected: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', padding: '30px' }}>
      <ButtonNumber
        size={args.size}
        variant={args.variant}
        shape={args.shape}
        inactive={args.inactive}
        selected={args.selected}
      >
        {args.children}
      </ButtonNumber>
    </div>
  ),
  args: {
    children: defaultText,
    selected: true,
  },
};

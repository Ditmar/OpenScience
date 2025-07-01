import type { Meta, StoryObj } from '@storybook/react';
import OLItem from './OLItem';

const meta = {
  title: 'ui/components/atoms/ol-item',
  component: OLItem,
  argTypes: {
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'circle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    active: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
} as Meta<typeof OLItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SquareSm = {
  args: { value: '1', shape: 'square', size: 'sm', active: false },
};
export const SquareSmActive = {
  args: { value: '1', shape: 'square', size: 'sm', active: true },
};

export const SquareMd = {
  args: { value: '1', shape: 'square', size: 'md', active: false },
};
export const SquareMdActive = {
  args: { value: '1', shape: 'square', size: 'md', active: true },
};

export const SquareLg = {
  args: { value: '1', shape: 'square', size: 'lg', active: false },
};
export const SquareLgActive = {
  args: { value: '1', shape: 'square', size: 'lg', active: true },
};

export const RoundedSm = {
  args: { value: '1', shape: 'rounded', size: 'sm', active: false },
};
export const RoundedSmActive = {
  args: { value: '1', shape: 'rounded', size: 'sm', active: true },
};

export const RoundedMd = {
  args: { value: '1', shape: 'rounded', size: 'md', active: false },
};
export const RoundedMdActive = {
  args: { value: '1', shape: 'rounded', size: 'md', active: true },
};

export const RoundedLg = {
  args: { value: '1', shape: 'rounded', size: 'lg', active: false },
};
export const RoundedLgActive = {
  args: { value: '1', shape: 'rounded', size: 'lg', active: true },
};

export const CircleSm = {
  args: { value: '1', shape: 'circle', size: 'sm', active: false },
};
export const CircleSmActive = {
  args: { value: '1', shape: 'circle', size: 'sm', active: true },
};

export const CircleMd = {
  args: { value: '1', shape: 'circle', size: 'md', active: false },
};
export const CircleMdActive = {
  args: { value: '1', shape: 'circle', size: 'md', active: true },
};

export const CircleLg = {
  args: { value: '1', shape: 'circle', size: 'lg', active: false },
};
export const CircleLgActive = {
  args: { value: '1', shape: 'circle', size: 'lg', active: true },
};

export const AllVariants: Story = {
  render: () => {
    const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg'];
    const shapes: ('square' | 'rounded' | 'circle')[] = ['square', 'rounded', 'circle'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: '2rem' }}>
        <div style={{ display: 'flex', gap: '3.5rem' }}>
          {shapes.map((shape) => (
            <div
              key={`inactive-${shape}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              {sizes.map((size) => (
                <OLItem
                  key={`${shape}-${size}-inactive`}
                  value="1"
                  shape={shape}
                  size={size}
                  active={false}
                />
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '3.5rem' }}>
          {shapes.map((shape) => (
            <div
              key={`active-${shape}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              {sizes.map((size) => (
                <OLItem
                  key={`${shape}-${size}-active`}
                  value="1"
                  shape={shape}
                  size={size}
                  active
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  },
};

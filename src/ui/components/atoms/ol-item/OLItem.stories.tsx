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

const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg'];
const shapes: ('square' | 'rounded' | 'circle')[] = ['square', 'rounded', 'circle'];

export default meta;

type Story = StoryObj<typeof meta>;

export const SquareSm = {
  args: { value: '1', shape: 'square', size: 'sm', active: false },
} satisfies Story;
export const SquareSmActive = {
  args: { value: '1', shape: 'square', size: 'sm', active: true },
} satisfies Story;

export const SquareMd = {
  args: { value: '1', shape: 'square', size: 'md', active: false },
} satisfies Story;
export const SquareMdActive = {
  args: { value: '1', shape: 'square', size: 'md', active: true },
} satisfies Story;

export const SquareLg = {
  args: { value: '1', shape: 'square', size: 'lg', active: false },
} satisfies Story;
export const SquareLgActive = {
  args: { value: '1', shape: 'square', size: 'lg', active: true },
} satisfies Story;

export const RoundedSm = {
  args: { value: '1', shape: 'rounded', size: 'sm', active: false },
} satisfies Story;
export const RoundedSmActive = {
  args: { value: '1', shape: 'rounded', size: 'sm', active: true },
} satisfies Story;

export const RoundedMd = {
  args: { value: '1', shape: 'rounded', size: 'md', active: false },
} satisfies Story;
export const RoundedMdActive = {
  args: { value: '1', shape: 'rounded', size: 'md', active: true },
} satisfies Story;

export const RoundedLg = {
  args: { value: '1', shape: 'rounded', size: 'lg', active: false },
} satisfies Story;
export const RoundedLgActive = {
  args: { value: '1', shape: 'rounded', size: 'lg', active: true },
} satisfies Story;

export const CircleSm = {
  args: { value: '1', shape: 'circle', size: 'sm', active: false },
} satisfies Story;
export const CircleSmActive = {
  args: { value: '1', shape: 'circle', size: 'sm', active: true },
} satisfies Story;

export const CircleMd = {
  args: { value: '1', shape: 'circle', size: 'md', active: false },
} satisfies Story;
export const CircleMdActive = {
  args: { value: '1', shape: 'circle', size: 'md', active: true },
} satisfies Story;

export const CircleLg = {
  args: { value: '1', shape: 'circle', size: 'lg', active: false },
} satisfies Story;
export const CircleLgActive = {
  args: { value: '1', shape: 'circle', size: 'lg', active: true },
} satisfies Story;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: '2rem' }}>
      <div style={{ display: 'flex', gap: '3.5rem' }}>
        {shapes.map((shape) => (
          <div
            key={`inactive-${shape}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              alignItems: 'flex-start',
            }}
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
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              alignItems: 'flex-start',
            }}
          >
            {sizes.map((size) => (
              <OLItem key={`${shape}-${size}-active`} value="1" shape={shape} size={size} active />
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
};

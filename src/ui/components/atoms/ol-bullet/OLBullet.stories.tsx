import type { Meta, StoryObj } from '@storybook/react';
import OLBullet from './OLBullet';

const meta = {
  title: 'ui/components/atoms/ol-bullet',
  component: OLBullet,
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
  },
} as Meta<typeof OLBullet>;

const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg'];
const shapes: ('square' | 'rounded' | 'circle')[] = ['square', 'rounded', 'circle'];

export default meta;

type Story = StoryObj<typeof meta>;

// Variaciones Inactivas
export const SquareSm = { args: { shape: 'square', size: 'sm', active: false } } satisfies Story;
export const SquareSmActive = {
  args: { shape: 'square', size: 'sm', active: true },
} satisfies Story;

export const SquareMd = { args: { shape: 'square', size: 'md', active: false } } satisfies Story;
export const SquareMdActive = {
  args: { shape: 'square', size: 'md', active: true },
} satisfies Story;

export const SquareLg = { args: { shape: 'square', size: 'lg', active: false } } satisfies Story;
export const SquareLgActive = {
  args: { shape: 'square', size: 'lg', active: true },
} satisfies Story;

export const RoundedSm = { args: { shape: 'rounded', size: 'sm', active: false } } satisfies Story;
export const RoundedSmActive = {
  args: { shape: 'rounded', size: 'sm', active: true },
} satisfies Story;

export const RoundedMd = { args: { shape: 'rounded', size: 'md', active: false } } satisfies Story;
export const RoundedMdActive = {
  args: { shape: 'rounded', size: 'md', active: true },
} satisfies Story;

export const RoundedLg = { args: { shape: 'rounded', size: 'lg', active: false } } satisfies Story;
export const RoundedLgActive = {
  args: { shape: 'rounded', size: 'lg', active: true },
} satisfies Story;

export const CircleSm = { args: { shape: 'circle', size: 'sm', active: false } } satisfies Story;
export const CircleSmActive = {
  args: { shape: 'circle', size: 'sm', active: true },
} satisfies Story;

export const CircleMd = { args: { shape: 'circle', size: 'md', active: false } } satisfies Story;
export const CircleMdActive = {
  args: { shape: 'circle', size: 'md', active: true },
} satisfies Story;

export const CircleLg = { args: { shape: 'circle', size: 'lg', active: false } } satisfies Story;
export const CircleLgActive = {
  args: { shape: 'circle', size: 'lg', active: true },
} satisfies Story;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: '2rem' }}>
      <div style={{ display: 'flex', gap: '5rem' }}>
        {shapes.map((shape) => (
          <div
            key={`inactive-${shape}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'flex-start',
            }}
          >
            {sizes.map((size) => (
              <OLBullet
                key={`${shape}-${size}-inactive`}
                shape={shape}
                size={size}
                active={false}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '5rem' }}>
        {shapes.map((shape) => (
          <div
            key={`active-${shape}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'flex-start',
            }}
          >
            {sizes.map((size) => (
              <OLBullet key={`${shape}-${size}-active`} shape={shape} size={size} active />
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
};

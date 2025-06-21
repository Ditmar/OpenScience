import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import OLItemList from './OLItemList';

const letters = Array.from({ length: 10 }, (_, i) => String.fromCharCode(65 + i));

const meta: Meta<typeof OLItemList> = {
  title: 'ui/components/molecules/ol-item-List',
  component: OLItemList,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <div style={{ padding: '2rem', maxWidth: 600 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'List of OLItems with shape, size, and active state. Responsive and controlled by props.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'column'],
      description: 'Dirección del layout (horizontal o vertical)',
    },
    items: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof OLItemList>;

export const NumericActive: Story = {
  name: 'Active numeric list',
  args: {
    direction: 'row',
    items: Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      shape: 'square',
      size: 'sm',
      active: true,
    })),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'All active items. Ideal for numbering or progress.',
      },
    },
  },
};

export const AlphabeticAlternating: Story = {
  name: 'Alphabetical list',
  args: {
    direction: 'row',
    items: letters.map((letter, i) => ({
      value: letter,
      shape: 'rounded',
      size: 'sm',
      active: i % 2 === 0,
    })),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Letters A–J with alternating active states.',
      },
    },
  },
};

export const VerticalLayout: Story = {
  name: 'Vertical list',
  args: {
    direction: 'column',
    items: letters.map((value) => ({
      value,
      shape: 'circle',
      size: 'md',
      active: false,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical list with circular shapes.',
      },
    },
  },
};

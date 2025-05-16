import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../../utils/vite-svgr/Icon';
import type { IconName } from '../../../utils/vite-svgr/types/IProps';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icons/SVG Icons',
  component: Icon,
  parameters: {
    componentSubtitle: 'SVG icons library for the app',
    docs: {
      description: {
        component:
          'Dynamically loaded SVG icons that can be customized in size, color, and other attributes.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'brand', value: '#123456' },
      ],
    },
    a11y: {
      config: {
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'image-alt', enabled: true },
        ],
      },
    },
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 16, max: 200, step: 4 },
      description: 'Icon size width in pixels',
      table: {
        category: 'Dimensions',
        defaultValue: { summary: '24' },
      },
    },
    height: {
      control: { type: 'range', min: 16, max: 200, step: 4 },
      description: 'Icon size height in pixels',
      table: {
        category: 'Dimensions',
        defaultValue: { summary: '24' },
      },
    },
    color: {
      control: 'color',
      description: 'Icon color (shorthand for fill or stroke depending on the icon)',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'currentColor' },
      },
    },
    stroke: {
      control: 'color',
      description: 'Stroke color (if applicable)',
      table: {
        category: 'Appearance',
      },
    },
    strokeWidth: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: 'Stroke width (if applicable)',
      defaultValue: 1,
      table: {
        category: 'Appearance',
      },
    },
    className: {
      control: 'text',
      description: 'Custom CSS class for the icon',
      defaultValue: '',
      table: {
        category: 'Styles',
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [
          'article',
          'articles',
          'burger-menu',
          'button-burguer',
          'button-burguer1',
          'close_simple',
          'close',
          'downloads',
          'eye',
          'facebook',
          'facebook1',
          'facelocation',
          'google',
          'home',
          'icon-upload-default',
          'icon-upload-primary',
          'left-arrow',
          'location',
          'logo',
          'magnifyingglass',
          'media',
          'pdf',
          'reference',
          'reference1',
          'right-arrow',
          'share',
          'start',
          'telegram',
          'vector',
          'volume',
          'volumes',
          'whatsapp' as IconName,
        ],
      },
      description: 'Name of the SVG icon to display',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
      defaultValue: 'article',
    },
    fill: {
      control: 'color',
      description: 'Fill color of the icon (if applicable)',
      defaultValue: 'currentColor',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
      },
    },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Icon opacity (0 to 1)',
      defaultValue: 1,
      table: {
        category: 'Appearance',
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    iconName: 'article',
    fill: 'currentColor',
    strokeWidth: 1,
    opacity: 1,
    role: 'img',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    color: 'red',
    stroke: 'black',
    strokeWidth: 1,
    className: 'custom-class',
    iconName: 'article',
  },
};

export const LogoIcon: Story = {
  args: {
    color: '#0073e6',
    iconName: 'logo',
  },
};

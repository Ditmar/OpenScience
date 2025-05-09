import type { Meta, StoryObj } from '@storybook/react';
import { ColorPreview } from './ColorPreview';

const meta: Meta<typeof ColorPreview> = {
  title: 'Tokens/ColorPreview',
  component: ColorPreview,
};

export default meta;

export const AllColors: StoryObj<typeof ColorPreview> = {
  render: () => <ColorPreview />,
};

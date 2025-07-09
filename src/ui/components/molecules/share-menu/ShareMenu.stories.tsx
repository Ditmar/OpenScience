import type { StoryObj, Meta } from '@storybook/react';
import ShareMenu from './ShareMenu';

const meta: Meta<typeof ShareMenu> = {
  title: 'ui/components/molecules/share-menu',
  component: ShareMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

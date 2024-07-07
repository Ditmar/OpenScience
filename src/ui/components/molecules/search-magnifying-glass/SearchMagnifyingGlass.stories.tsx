import type { StoryObj, Meta } from '@storybook/react';
import SearchMagnifyingGlass from './SearchMagnifyingGlass';

const meta: Meta<typeof SearchMagnifyingGlass> = {
  title: 'ui/components/molecules/search-magnifying-glass',
  component: SearchMagnifyingGlass,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

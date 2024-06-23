import type { StoryObj, Meta } from '@storybook/react';
import LabelResourcesPage from './LabelResourcesPage';

const meta: Meta<typeof LabelResourcesPage> = {
  title: 'ui/components/atoms/lavel-resources-page',
  component: LabelResourcesPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const RECURSOS: Story = {
  args: {
    text: 'RECURSOS ',
  },
};
export const PAGINA: Story = {
  args: {
    text: 'PAGINA',
  },
};

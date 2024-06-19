import type { StoryObj, Meta } from '@storybook/react';
import LabelResourcesPage from './LabelResourcesPage';

const meta: Meta<typeof LabelResourcesPage> = {
  title: 'ui/components/atoms/lavel-resources-page',
  component: LabelResourcesPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    text1: 'RECURSOS ',
    text2: ' PAGINA',
    variant: 'primary',
  },
};
export const Mobile: Story = {
  args: {
    text1: 'RECURSOS ',
    text2: ' PAGINA',
    variant: 'secondary',
  },
};

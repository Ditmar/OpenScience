import type { StoryObj, Meta } from '@storybook/react';
import ButtonsPdfShare from './ButtonsPdfShare';

const meta: Meta<typeof ButtonsPdfShare> = {
  title: 'ui/components/molecules/PdfShareButton',
  component: ButtonsPdfShare,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

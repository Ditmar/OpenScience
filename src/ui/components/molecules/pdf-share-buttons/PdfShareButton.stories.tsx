import type { StoryObj, Meta } from '@storybook/react';
import PdfShareButton from './PdfShareButton';

const meta: Meta<typeof PdfShareButton> = {
  title: 'ui/components/molecules/pdf-share-buttons',
  component: PdfShareButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

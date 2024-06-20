import type { StoryObj } from '@storybook/react';
import IconUpload from './IconUpload';
import icon_upload_default from '../../../../assets/icons/icon-upload-default.svg?raw';
import icon_upload_primary from '../../../../assets/icons/icon-upload-primary.svg?raw';

const meta = {
  title: 'ui/components/atoms/icon-upload',
  component: IconUpload,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'icon_upload_default',
    icon: icon_upload_default,
  },
};

export const Primary: Story = {
  args: {
    children: 'icon_upload_primary',
    icon: icon_upload_primary,
  },
};

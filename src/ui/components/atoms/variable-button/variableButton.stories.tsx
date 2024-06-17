import type { StoryObj, Meta } from '@storybook/react';
import VariableButton from './VariableButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';

const meta = {
  title: 'ui/components/atoms/variable-button',
  component: VariableButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof VariableButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PdfButton: Story = {
  args: {
    children: 'PDF',
    icon: PdfIcon,
  },
};

export const LinkButton: Story = {
  args: {
    children: 'SHARE',
    icon: LinkIcon,
  },
};

import type { StoryObj, Meta } from '@storybook/react';
import ReferenceAPA from './Reference.apa';

const meta = {
  title: 'ui/components/atoms/reference-information',
  component: ReferenceAPA,
  argTypes: {
    referencia: { control: 'text' },
  },
} as Meta<typeof ReferenceAPA>;

export default meta;

type Story = StoryObj<typeof meta>;

<<<<<<< HEAD
export const Default: Story = {
=======
export const information: Story = {
>>>>>>> fc94d82221ea4439ad1b21632194440670003051
  args: {
    reference:
      '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)',
  },
};

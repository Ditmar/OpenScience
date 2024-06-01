import type { StoryObj, Meta } from '@storybook/react';
import ReferenceAPA from './Reference.apa';

const meta = {
  title: 'ui/components/atoms/labelreference',
  component: ReferenceAPA,
  argTypes: {
    referencia: { control: 'text' },
  },
} as Meta<typeof ReferenceAPA>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reference:
      '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)',
  },
};
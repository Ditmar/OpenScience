import type { StoryObj, Meta } from '@storybook/react';
import ReferenciaAPA from './Referencia.apa';

const meta = {
  title: 'ui/components/atoms/labelreference',
  component: ReferenciaAPA,
  argTypes: {
    referencia: { control: 'text' },
  },
} as Meta<typeof ReferenciaAPA>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    referencia:
      '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)',
  },
};

import type { StoryObj, Meta } from '@storybook/react';
import ReferenceAPA from './Reference';

const meta: Meta<typeof ReferenceAPA> = {
  title: 'ui/components/atoms/reference-information',
  component: ReferenceAPA,
  argTypes: {
    text: { control: 'text' },
    color: { control: { type: 'select', options: ['primary', 'main', 'tertiary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    text: 'A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) ',
    color: 'primary',
  },
};
export const secondary: Story = {
  args: {
    text: 'A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) ',
    color: 'secondary',
  },
};
export const tertiary: Story = {
  args: {
    text: 'A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) ',
    color: 'tertiary',
  },
};

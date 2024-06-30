import type { StoryObj, Meta } from '@storybook/react';
import References from './References';
import ReferenceAPA from '../../atoms/reference-information/Reference';
import LabelReferences from '../../atoms/label-references/LabelReferences';

const meta: Meta<typeof References> = {
  title: 'ui/components/molecules/references',
  component: References,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <LabelReferences text="Referencias" />
        <ReferenceAPA text="A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) " />
        <ReferenceAPA text="A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) " />
        <ReferenceAPA text="A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) " />
        <ReferenceAPA text="A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022) " />
      </>
    ),
  },
};

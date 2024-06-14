import type { StoryObj, Meta } from '@storybook/react';
import Variables from './Variables';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof Variables> = {
  title: 'ui/components/atoms/label-variables',
  component: Variables,
  argTypes: {
    colorVariant: { control: { type: 'select', options: ['primary', 'main', 'secondary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Volumenes: Story = {
  args: {
    colorVariant: 'main',
    text: 'VOLÚMENES',
  },
};

export const Enlace: Story = {
  args: {
    colorVariant: 'secondary',
    text: 'UNIPOL.EDU.BO',
    href: 'https://www.unipol.edu.bo',
  },
};

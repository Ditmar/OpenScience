import type { StoryObj, Meta } from '@storybook/react';
import LabelVariable from './LabelVariable';

const meta: Meta<typeof LabelVariable> = {
  title: 'ui/components/atoms/lavel-variable',
  component: LabelVariable,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    textbar1: '.',
    text1: 'RECURSOS ',
    textbar2: '.',
    text2: ' PAGINA',
  },
};
export const Mobile: Story = {
  args: {
    textbar1: ' ',
    text1: 'RECURSOS ',
    textbar2: '.',
    text2: ' PAGINA',
  },
};
